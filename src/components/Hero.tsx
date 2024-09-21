import { Button } from "./ui/button";

export default function Hero() {
    return (
        <div className="Hero w-100 py-12 bg-red-900 h-96 dark:bg-red-500">
            <div className="container mx-auto text-center">
                <h1 className="text-9xl">Hero Heading</h1>
                <p className="text-lg">hero sub-page text</p>
                <Button variant={'default'} size={'lg'}>Button</Button>
            </div>
        </div>
    )
}