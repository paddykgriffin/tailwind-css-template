import Hero from "../../components/Hero";

interface Props {
    children: React.ReactNode;
}

export default function ContactLayout({children}: Props) {
    return (
        <>
            <Hero />
            <div className="container mx-auto">
                {children}
            </div>
        </>
    )
}