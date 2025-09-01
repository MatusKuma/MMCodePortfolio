import '../styles/Background.css'

export default function Background(){
    return(
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                    {[...Array(100)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: '5px',
                                height: '5px',
                                background: 'rgba(252, 89, 30, 0.8)',
                                borderRadius: '50%',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                            }}
                        />
                    ))}
                </div>
    )

}