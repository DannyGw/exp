import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// ID from the provided Drive URL
const DRIVE_FILE_ID = '1ceSPFABbr-tkjd_hIMYhRc22LgRyadao';
const DRIVE_DIRECT_URL = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;

// GET /resume → forces a file download of public/resume.pdf if available,
// otherwise streams from Google Drive direct-download URL.
export async function GET(request: Request) {
  const pdfPath = path.join(process.cwd(), 'public', 'resume.pdf');

  // Lightweight analytics
  try {
    const forwardedFor = request.headers.get('x-forwarded-for') || '';
    const ip = forwardedFor.split(',')[0]?.trim() || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referer = request.headers.get('referer') || 'direct';
    // eslint-disable-next-line no-console
    console.log('[resume-download]', new Date().toISOString(), { ip, userAgent, referer });
  } catch {}

  // Try local file first
  try {
    const file = await fs.readFile(pdfPath);
    const uint8 = new Uint8Array(file);
    // Cast is safe: Response body accepts BufferSource at runtime
    return new Response(uint8 as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
        'Cache-Control': 'public, max-age=3600, immutable'
      }
    });
  } catch {}

  // Fallback: stream from Google Drive (ensure file sharing is "Anyone with the link")
  try {
    const driveResponse = await fetch(DRIVE_DIRECT_URL, { cache: 'no-store' });
    if (!driveResponse.ok || !driveResponse.body) {
      throw new Error(`Drive fetch failed: ${driveResponse.status}`);
    }
    return new Response(driveResponse.body, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
        'Cache-Control': 'no-store'
      }
    });
  } catch {
    // Final fallback: redirect to the Drive viewer URL
    return NextResponse.redirect(
      'https://drive.google.com/file/d/1ceSPFABbr-tkjd_hIMYhRc22LgRyadao/view?usp=drive_link',
      302
    );
  }
}


