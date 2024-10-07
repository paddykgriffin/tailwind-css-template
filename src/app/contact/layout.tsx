import {Hero} from "@/app/components/Hero";

interface Props {
    children: React.ReactNode;
}

export default function ContactLayout({children}: Props) {
    return (
        <>
 <Hero variant="default" size="lg" title="Main Heading" subTitle="Lorem ipsum" btnLabel="Learn More" backgroundImage="url"  />
    
            <div className="container mx-auto">
                {children}
            </div>
        </>
    )
}