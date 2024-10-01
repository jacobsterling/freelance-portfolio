import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer({ sectionRefs, activeSection, activeTab }) {
    const [isLastSection, setIsLastSection] = useState(false);

    useEffect(() => {
        setIsLastSection(activeSection === sectionRefs.length - 1);
    }, [activeSection, sectionRefs]);

    const scrollToNextSection = () => {
        if (isLastSection) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const nextSection = sectionRefs[activeSection + 1];
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    if (activeTab !== 'home') {
        return null; // Don't render anything if not on the home tab
    }

    return (
        <footer className="fixed bottom-0 left-0 right-0 flex justify-center pb-4">
            <Button
                onClick={scrollToNextSection}
                variant="outline"
                size="sm"
                className="flex items-center bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                {isLastSection ? (
                    <>
                        <ArrowUp className="h-4 w-4 mr-2" />
                        Back to Top
                    </>
                ) : (
                    <>
                        <ArrowDown className="h-4 w-4 mr-2" />
                        Next Section
                    </>
                )}
            </Button>
        </footer>
    );
}

