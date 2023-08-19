import { useState } from "react";
import { AccordionAnswer, AccordionAnswerContainer, AccordionCloseIcon, AccordionContainer, AccordionContent, AccordionItem, AccordionOpenIcon, AccordionQuestion, AccordionQuestionContainer } from "./styles";

interface AccordionProps {
    data: AccordionItemProps[];
}

interface AccordionItemProps {
    question: string;
    answer: string;
}

export function Accordion({ data }: AccordionProps) {
    const [activeAccordion, setActiveAccordion] = useState(-1);

    function handleAccordionItemClicked(index: number) {
        if (index === activeAccordion) {
            setActiveAccordion(-1);
            return;
        }
        setActiveAccordion(index);
    }

    return (
        <AccordionContainer>
            <AccordionContent>
                { data.map((item, index) => 
                    <AccordionItem $isOpen={activeAccordion === index} key={item.question}>
                        <AccordionQuestionContainer
                            onClick={() => handleAccordionItemClicked(index)}
                            $isLastQuestion={data.length === index+1}
                            $isOpen={activeAccordion === index}
                        >
                            <AccordionQuestion>
                                {item.question}
                            </AccordionQuestion>
                            { activeAccordion === index 
                                ? <AccordionCloseIcon />
                                : <AccordionOpenIcon />
                            }
                        </AccordionQuestionContainer>
                        { activeAccordion === index
                            ?
                            <AccordionAnswerContainer>
                                <AccordionAnswer>
                                    {item.answer}
                                </AccordionAnswer>
                            </AccordionAnswerContainer>
                            : null
                        }    
                    </AccordionItem>
                )}
            </AccordionContent>
        </AccordionContainer>
    );
} 