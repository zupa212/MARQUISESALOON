import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#121212',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '40px',
                }}
            >
                <div
                    style={{
                        color: '#C9A24C',
                        fontFamily: 'serif',
                        fontSize: 120,
                        lineHeight: 1,
                        fontWeight: 'bold',
                        marginTop: '-10px',
                    }}
                >
                    M
                </div>
            </div>
        ),
        { ...size }
    )
}
