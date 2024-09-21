
interface Props {
    children: React.ReactNode;
}

export default function ContactLayout({children}: Props) {
    return (
        <>
        <div className="hero h-screen">
         Hero for contact page
        </div>
        <div className="container mx-auto">
            {children}
        </div>
        </>
    )
}