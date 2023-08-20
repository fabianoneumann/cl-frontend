//import React from "react";
import { 
    LandingPageContainer, 
    LandingPageContent, 
    LandingPageSectionContainer,
    LandingPageSectionParagraph,
    LandingPageSectionSubtitle, 
    LandingPageSectionTitle,
    CallToActionButton,
    LandingPageSectionActiveEducationContent,
    LandingPageSectionActiveEducationCard,
    LandingPageSectionActiveEducationCardHeader,
    LandingPageSectionSpacedBetweenContent,
    LandingPageTyperContainer,
    LandingPageSectionWhyCLContent,
    LandingPageSectionWhyCLItem,
    LandingPageSectionNumbersContent,
    LandingPageSectionNumberItem,
    LandingPageSectionResultsContent,
    LandingPageSectionResultsImage,
    LandingPageSectionSafeAreaContent,
    LandingPageSectionSafeAreaItem,
    LandingPageSectionSafeAreaText,
    LandingPageSectionWhoForList,
    ColoredArrowBendDownRight,
    BitcoinIcon,
    CurrencyEthIcon,
    RocketLaunchIcon,
    BooksIcon,
    MoneyIcon,
    ChartLineIcon,
    CurrencyDollarIcon,
    ChartPieSliceIcon,
    TerminalWindowIcon,
    StudentIcon,
    UsersThreeIcon,
    DiscordIcon,
    ShieldCheckIcon,
    MonitorPlayIcon,
    HandshakeIcon
} from "./styles";

import { Typewriter } from "react-simple-typewriter";

import creditCardFlags from "../../assets/images/credit-card-flags.svg";
import mentoresCL from "../../assets/images/mentores-cl.png";
import result01 from "../../assets/images/resultado-01.png";
import result02 from "../../assets/images/resultado-02.png";
import result03 from "../../assets/images/resultado-03.png";
import result04 from "../../assets/images/resultado-04.png";
import result05 from "../../assets/images/resultado-05.png";
import result06 from "../../assets/images/resultado-06.png";
import result07 from "../../assets/images/resultado-07.png";
import result08 from "../../assets/images/resultado-08.png";
import result09 from "../../assets/images/resultado-09.png";
import result10 from "../../assets/images/resultado-10.png";
import result11 from "../../assets/images/resultado-11.png";
import result12 from "../../assets/images/resultado-12.png";
import { Accordion } from "../../components/Accordion";
import { NavLink } from "react-router-dom";

export function LandingPage() {
    //React.useEffect(() => {
    //    window.scrollTo({top: 0, behavior: 'instant'});
    //}, []);

    const typewritterWords = [
        "dos investimentos em cripto",
        "das finanças descentralizadas (DEFI)",
        "da carteira de investimentos mais responsável",
        "do gerenciamento de risco e de capital",
        "da leitura e interpretacão dos candles",
        "da leitura e interpretação dos gráficos",	
        "da identificação dos topos e fundos",
        "das linhas de tendência de alta e baixa",
        "das estratégias com Fibonacci e Elliott", "dos padrões gráficos",
        "das ondas de impulsão e correção", "dos ciclos de mercado",
        "das estratégias de investimento", "das estratégias de trade",
        "da renda passiva com DEFI", "da programação com e sem blockchain",
        "do desenvolvimento pessoal e profissional",
    ];

    const accordionData = [
        {
            'question': 'O que é a Comunidade Cripto Lucrativo?',
            'answer': 'Ambiente de aprendizagem ativa com teoria e prática para você se tornar especialista em investimentos, trading, DEFI e desenvolvimento Web3, com mentorias via Discord.'
        },
        {
            'question': 'Nunca investi em criptomoedas, este Treinamento é para mim?',
            'answer': 'Sim. O conteúdo das aulas vai permitir que você aprenda como investir melhor no mercado de criptomoedas. O intuito é que você seja o protagonista da sua jornada de investidor.'
        },
        {
            'question': 'Já invisto em criptomoedas, este Treinamento é para mim?',
            'answer': 'Investidores experientes também se beneficiam do conteúdo e comunidade CL. Você vai se aprofundar em análise técnica (gráfica), de sentimento (liquidez), gerenciamento de risco, análise fundamentalista e programação. Participar da Comunidade e ficar por dentro de informações relevantes do mercado cripto também pode te ajudar nos investimentos.'
        },
        {
            'question': 'Quero começar a investir, mas tenho medo. O Treinamento me ajuda?',
            'answer': 'Sim. O CL vai fazer com que você se sinta mais seguro ao investir seu dinheiro. Um dos pilares que sustentam o CL é Gerenciamento de Risco. Você vai aprender como proteger seu dinheiro de eventuais desvalorizações e alta volatilidade, além de saber dimensionar adequadamente as sua posições.'
        },
        {
            'question': 'É só para quem investir valores altos?',
            'answer': 'Não. Este treinamento e comunidade foram criados para todos os investidores, independente do tamanho do bolso ou capital investido. Investir em conhecimento é o melhor investimento que você pode fazer para estar preparado(a) quando o capital ficar maior.'
        },
        {
            'question': 'O CL fala só de Bitcoin ou de outras criptomoedas também?',
            'answer': 'No CL nós estudamos o mercado cripto, além do fluxo do dinheiro dentro do mercado e no mundo como um todo, entre ativos de maior ou menor risco. Você irá aprender a avaliar ciclos de mercado e macroeconomia.'
        },
        {
            'question': 'Eu vou aprender como comprar e vender Bitcoin?',
            'answer': 'Sim. Você vai sair do básico ao avançado em compras e vendas de investimento e de trading. Além de comprar e vender Bitcoin e outras criptomoedas, você vai aprender a operar tanto na compra quanto na venda com contratos futuros.'
        },
        {
            'question': 'Vou encontrar sinais de operações de compra ou venda no CL?',
            'answer': 'Eventualmente algumas oportunidades podem aparecer enquanto estivermos juntos na comunidade via Discord. Entrentanto, o treinamento e comunidade trata do mercado de maneira geral, sem foco em sinais de trade. Caso aconteça, será apenas educacional.'
        },
        {
            'question': 'Vou aprender a ler gráficos e entender indicadores??',
            'answer': 'Sim. Você vai aprender a ler e interpretar as velas e os gráficos de maneira profissional. Além disso, você vai aprender a utilizar indicadores de maneira eficiente, sem precisar de muitos indicadores para tomar decisões.'
        },
        {
            'question': 'Como funciona a mentoria?',
            'answer': 'A mentoria é feita via Discord, por texto e voz, em grupo. Atendimentos individuais pode acontecer para os membros mais ativos, em casos particulares, selecionados pelos mentores. Você pode tirar dúvidas sobre o conteúdo das aulas, sobre o mercado e sobre o que mais precisar dentro da comunidade. A mentoria é feita por profissionais que vivem do mercado cripto.'
        },
        {
            'question': 'Por quanto tempo terei acesso ao conteúdo e à comunidade?',
            'answer': 'Enquanto sua anuidade estiver ativa, você terá acesso completo ao conteúdo. Basta renovar a anuidade para continuar tendo acesso ao material e a comunidade de alunos. Nossa equipe e mentores adicionam conteúdos novos de tempos em tempos – é sempre bom estar atualizado!'
        },
        {
            'question': 'As operações apresentadas nas Redes Sociais serão compartilhadas?',
            'answer': 'Não. Os mentores possuem experiência e aproveitam oportunidades de alto risco fora dos horários de atendimentos. Dentro do CL, o objetivo é compartilhar conhecimento e possibilitar que os estudantes sejam capazes de tomar as próprias decisões dentro do mercado.'
        },
        {
            'question': 'Como faço para entras na Comunidade Cripto Lucrativo?',
            'answer': 'Basta clicar no botão “QUERO FAZER PARTE DA COMUNIDADE CRIPTO LUCRATIVO” e seguir as instruções. Você será redirecionado para a página de pagamento, onde poderá escolher a forma de pagamento e concluir a compra. Após a confirmação do pagamento, você receberá um e-mail com a confirmação para acessar o conteúdo do CL dentro da plataforma da Hotmart e na Página do CL. Lá dentro você terá acesso ao vídeo que ensina sobre o Discord, caso você não conheça a ferramenta.'
        },
        {
            'question': 'Você fazem lives para os alunos?',
            'answer': 'Sim, fazemos lives para membros da comunidade. As lives são feitas via YouTube e os links são compartilhados no Discord. Além das lives, temos encontros para aulas síncronas para estudar o que está acontecendo em tempo real. Em alguns momentos a comunidade irá funcionar como uma sala de operações, quando investigaremos se existem oportunidades com base nas estratégias utilizadas pelos mentores e membros mais experientes.'
        },
        {
            'question': 'Se no futuro eu não quiser continuar, como faço para cancelar minha assinatura?',
            'answer': 'Você pode cancelar a sua assinatura e ter devolução de 100% do seu dinheiro dentro do prazo de 7 dias. Depois disso, mesmo que tenha parcelado a compra em 12x, como se trata de uma anuidade, o cancelamento irá interromper a renovação automática da anuidade. Você continuará tendo acesso ao conteúdo e a comunidade até o final do período contratado. Essa política de cancelamento é padrão da Hotmart, que é a plataforma que utilizamos para processar os pagamentos. Qualquer necessidade nesse sentido pode ser tratada diretamente com a Hotmart, no suporte do site deles.'
        }
    ];

    return (
        <LandingPageContainer>
            <LandingPageContent>

                <LandingPageSectionContainer $index={0}>
                    <LandingPageTyperContainer>
                        <h3>
                            Seja bem vindo(a) ao mundo
                        </h3>
                        <span>
                            <Typewriter 
                                words={typewritterWords}
                                loop={true}
                                cursor
                                cursorStyle='₿'
                                typeSpeed={50}
                                deleteSpeed={25}
                                delaySpeed={1500}
                            />
                        </span>
                    </LandingPageTyperContainer>
                    <LandingPageSectionTitle>
                        Aprenda a investir, fazer trade, utilizar DEFI e a programar aplicações em blockchain
                    </LandingPageSectionTitle>
                    <LandingPageSectionParagraph>
                        Conquiste sua <b>INDEPENDÊNCIA</b> e <b>LIBERDADE FINANCEIRA</b> com o mercado
                        de criptomoedas
                    </LandingPageSectionParagraph>
                    <CallToActionButton to="https://payment.hotmart.com/next/K54293854C" target="_blank">
                        QUERO FAZER PARTE DA COMUNIDADE CRIPTO LUCRATIVO
                    </CallToActionButton>
                    <LandingPageSectionParagraph>
                        pagamento 100% seguro
                    </LandingPageSectionParagraph>
                    <img src={ creditCardFlags } alt="landing-page-section-0-image" />
                    <LandingPageSectionParagraph style={{marginTop: 40}}>
                        Na <b>COMUNIDADE CRIPTO LUCRATIVO</b> você vai ter acesso ao método de aprendizagem <b>MAIS AVANÇADO</b> para você se tornar <b>ESPECIALISTA</b> em investimentos, trading, DEFI e desenvolvimento Web3
                    </LandingPageSectionParagraph>
                </LandingPageSectionContainer>
                
                <LandingPageSectionContainer  $index={1}>
                    <LandingPageSectionSubtitle>
                        Somos um ambiente de <span>EDUCAÇÃO ATIVA</span> para o <span>MERCADO CRIPTO</span>
                    </LandingPageSectionSubtitle>
                    <LandingPageSectionParagraph>
                        No Cripto Lucrativo, a sua EVOLUÇÃO irá se manifestar na sua forma de PENSAR, SENTIR e AGIR no mercado cripto
                    </LandingPageSectionParagraph>
                    <LandingPageSectionActiveEducationContent>
                        <LandingPageSectionActiveEducationCard>
                            <LandingPageSectionActiveEducationCardHeader>
                                <h2>Atitude</h2>
                                <RocketLaunchIcon weight="duotone" />
                            </LandingPageSectionActiveEducationCardHeader>
                            <p>A sua vontade, comportamentos e posturas adequadas em relação aos estudos e ao mercado são o pontapé inicial para o seu sucesso. As atitudes incluem aspectos como ética, motivação, trabalho em equipe, resiliência e adaptabilidade.</p>
                        </LandingPageSectionActiveEducationCard>
                        <LandingPageSectionActiveEducationCard>
                            <LandingPageSectionActiveEducationCardHeader>
                                <h2>Conhecimento</h2>
                                <BooksIcon weight="duotone" />
                            </LandingPageSectionActiveEducationCardHeader>
                            <p>Você terá acesso ao conhecimento teórico e prático utilizado por investidores, traders e programadores que vivem do mundo cripto, por meio de vídeos para assistir quando preferir, além do conteúdo em lives e nas salas de texto e voz no Discord.</p>
                        </LandingPageSectionActiveEducationCard>
                        <LandingPageSectionActiveEducationCard>
                            <LandingPageSectionActiveEducationCardHeader>
                                <h2>Habilidades</h2>
                                <MoneyIcon weight="duotone" />
                            </LandingPageSectionActiveEducationCardHeader>
                            <p>Em contato com profissionais, você terá exemplos no dia a dia para aplicar o conhecimento na prática, de forma eficiente. Com aprendizagem ativa e aprimoramentos ao longo do tempo, você saberá fazer e se tornará especialista no mercado cripto.</p>
                        </LandingPageSectionActiveEducationCard>
                    </LandingPageSectionActiveEducationContent>
                </LandingPageSectionContainer>

                <LandingPageSectionContainer $index={2}>
                    <LandingPageSectionSubtitle>
                        Por que escolher a Comunidade <span>Cripto Lucrativo?</span>
                    </LandingPageSectionSubtitle>
                    <LandingPageSectionWhyCLContent>
                        <LandingPageSectionWhyCLItem>
                            <BitcoinIcon weight="bold" />
                            <h3>Análise de Fundamentos</h3>
                            <p>
                                Saiba como escolher os melhores projetos e com maior potencial para compor sua carteira
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <ChartLineIcon weight="duotone" />
                            <h3>Análise Técnica</h3>
                            <p>
                                Aprenda a ler e interpretar os gráficos de forma profissional e melhore seus resultados
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <CurrencyDollarIcon weight="bold" />
                            <h3>Análise de Liquidez</h3>
                            <p>
                                Entenda como funciona os pontos de stops, liquidações e reversões de tendência
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <ChartPieSliceIcon weight="duotone" />
                            <h3>Gestão de Risco</h3>
                            <p>
                                Domine a gestão de risco e do capital para aumentar seus lucros e diminuir suas perdas
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <CurrencyEthIcon weight="duotone" />
                            <h3>DEFI</h3>
                            <p>
                                Conheça e utilize os protocolos de finanças descentralizadas para gerar renda passiva
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <TerminalWindowIcon weight="duotone" />
                            <h3>Programação Web3</h3>
                            <p>
                                Desenvolva aplicações que geram e utilizam smart contracts e entre para o mercado de TI
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <StudentIcon weight="duotone" />
                            <h3>Educação Ativa</h3>
                            <p>
                                Se torne especialista com o método de aprendizagem mais avançado, que une teoria e prática
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <UsersThreeIcon weight="duotone" />
                            <h3>Mentorias</h3>
                            <p>
                                Mentoria no discord por texto e voz com profissionais que vivem do mercado
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <NavLink
                                style={{maxWidth: 'fit-content'}}
                                to="https://discord.gg/MaQ5a96dKv" 
                                title="Discord"
                            >
                                <DiscordIcon weight="duotone" />
                            </NavLink>
                            <h3>Discord</h3>
                            <p>
                                Ambiente para aulas, bater papo, tirar dúvidas e interagir com membros da comunidade
                            </p>
                        </LandingPageSectionWhyCLItem>
                    </LandingPageSectionWhyCLContent>
                </LandingPageSectionContainer >

                <LandingPageSectionContainer $index={3}>
                    <LandingPageSectionSpacedBetweenContent>
                        <LandingPageSectionSubtitle>
                            Números do <span>CL</span>
                        </LandingPageSectionSubtitle>
                        <LandingPageSectionParagraph style={{color: 'gray'}}>
                            Faça parte do Cripto Lucrativo você também
                        </LandingPageSectionParagraph>
                    </LandingPageSectionSpacedBetweenContent>
                    <LandingPageSectionNumbersContent>
                        <LandingPageSectionNumberItem>
                            <span>+1M</span>{' '}<p>seguidores em todas as redes socias</p>
                        </LandingPageSectionNumberItem>
                        <LandingPageSectionNumberItem>
                            <span>+500</span>{' '}<p>estudantes no YouTube diariamente</p>
                        </LandingPageSectionNumberItem>
                        <LandingPageSectionNumberItem>
                            <span>+200</span>{' '}<p>membros ativos na comunidade CL</p>
                        </LandingPageSectionNumberItem>
                    </LandingPageSectionNumbersContent>
                </LandingPageSectionContainer>

                <LandingPageSectionContainer $index={4}>
                    <LandingPageSectionSubtitle>
                        Desenvolva novas <span>habilidades</span>
                    </LandingPageSectionSubtitle>
                    <LandingPageSectionParagraph>
                        Além de aprender a investir, operar e programar, são desenvolvidas habilidades como pensamento crítico e sistêmico, características de comportamento empreendedor, planejamento e raciocínio lógico
                    </LandingPageSectionParagraph>	
                    <LandingPageSectionParagraph>
                        Falar sobre os conhecimentos utilizados para adquirir as habilidades?
                    </LandingPageSectionParagraph>	
                </LandingPageSectionContainer>

                <LandingPageSectionContainer $index={5}>
                    <LandingPageSectionSubtitle>
                        Resultados
                    </LandingPageSectionSubtitle>
                    <LandingPageSectionParagraph>
                        Vejas os resultados dos mentores que seguem o que é ensinado no CRIPTO LUCRATIVO:
                    </LandingPageSectionParagraph>
                    <LandingPageSectionResultsContent>
                        <LandingPageSectionResultsImage src={result01} />
                        <LandingPageSectionResultsImage src={result02} />
                        <LandingPageSectionResultsImage src={result03} />
                        <LandingPageSectionResultsImage src={result04} />
                        <LandingPageSectionResultsImage src={result05} />
                        <LandingPageSectionResultsImage src={result06} />
                        <LandingPageSectionResultsImage src={result07} />
                        <LandingPageSectionResultsImage src={result08} />
                        <LandingPageSectionResultsImage src={result09} />
                        <LandingPageSectionResultsImage src={result10} />
                        <LandingPageSectionResultsImage src={result11} />
                        <LandingPageSectionResultsImage src={result12} />
                    </LandingPageSectionResultsContent>
                </LandingPageSectionContainer>

                <LandingPageSectionContainer $index={6}>
                    <LandingPageSectionSubtitle>
                        Para quem é a Comunidade <span>Cripto Lucrativo</span>
                    </LandingPageSectionSubtitle>
                    <LandingPageSectionWhoForList>
                        <li><ColoredArrowBendDownRight />Para quem deseja viver do mercado cripto, seja como especulador ou como maker</li>
                        <li><ColoredArrowBendDownRight />Para quem está buscando liberdade financeira e independência financeira</li>
                        <li><ColoredArrowBendDownRight />Para quem tem sede por conhecimento e quer conteúdo mais avançado para sair do amadorismo</li>
                        <li><ColoredArrowBendDownRight />Para quem sabe a importância de um bom grupo para estudar e trabalhar junto e busca uma comunidade com interação por texto e voz</li>
                        <li><ColoredArrowBendDownRight />Para quem quer aprender a investir, fazer trade, utilizar DEFI ou a programar aplicações com e sem blockchain</li>
                        <li><ColoredArrowBendDownRight />Para quem quer ter um engenheiro de software, cientista da computação, empreendedor, investidor e trader como principal mentor de mercado</li>
                        <li><ColoredArrowBendDownRight />Para quem cansou de perder dinheiro com trade e decidiu virar o jogo</li>
                    </LandingPageSectionWhoForList>
                </LandingPageSectionContainer>

                <LandingPageSectionContainer $index={7}>
                    <LandingPageSectionSafeAreaContent>
                        <LandingPageSectionSafeAreaItem>
                            <ShieldCheckIcon weight="duotone" />
                            <LandingPageSectionSafeAreaText>
                                <h3>Pagamento Seguro</h3>
                                <p>Seus dados estão protegidos e sua compra é 100% segura</p>
                            </LandingPageSectionSafeAreaText>
                        </LandingPageSectionSafeAreaItem>
                        <LandingPageSectionSafeAreaItem>
                            <MonitorPlayIcon weight="duotone" />
                            <LandingPageSectionSafeAreaText>
                                <h3>Acesso Imediato</h3>
                                <p>Seu login e senha serão enviados ao seu e-mail logo após o processamento do pagamento</p>
                            </LandingPageSectionSafeAreaText>
                        </LandingPageSectionSafeAreaItem>
                        <LandingPageSectionSafeAreaItem>
                            <HandshakeIcon weight="duotone" />
                            <LandingPageSectionSafeAreaText>
                                <h3>7 dias de garantia</h3>
                                <p>Você poderá pedir a devolução de 100% do seu dinheiro dentro deste prazo</p>
                            </LandingPageSectionSafeAreaText>
                        </LandingPageSectionSafeAreaItem>
                    </LandingPageSectionSafeAreaContent>
                </LandingPageSectionContainer>

                <LandingPageSectionContainer $index={8}>
                    <LandingPageSectionSubtitle>
                        Depoimentos
                    </LandingPageSectionSubtitle>
                    <LandingPageSectionParagraph>
                        Carrossel com depoimento de membros
                    </LandingPageSectionParagraph>
                    <LandingPageSectionParagraph>
                        Foto de perfil circular com borda, nome e texto
                    </LandingPageSectionParagraph>
                </LandingPageSectionContainer>

                <LandingPageSectionContainer $index={9}>
                    <LandingPageSectionSubtitle>
                        CALL to Action com:
                    </LandingPageSectionSubtitle>
                    <LandingPageSectionParagraph>
                        Imagem à esqueda,  título, descrição e botão
                    "Entrar agora" à direita
                </LandingPageSectionParagraph>
                </LandingPageSectionContainer>

                <LandingPageSectionContainer $index={10}>
                    <LandingPageSectionSubtitle>
                        Perguntas <span>Frequêntes</span>
                    </LandingPageSectionSubtitle>
                    <Accordion data={accordionData} />
                </LandingPageSectionContainer>

                <LandingPageSectionContainer $index={11}>
                    <LandingPageSectionSubtitle>
                        "A <span>INDEPENDÊNCIA</span> e a <span>LIBERDADE FINANCEIRA</span> podem estar mais próximas
                        da sua <span>REALIDADE</span> do que você imagina."
                    </LandingPageSectionSubtitle>
                    <LandingPageSectionParagraph style={{marginTop: 36}}>
                        Você merece ter o seu dinheiro protegido e valorizado de verdade ao longo do tempo. Isso não precisa ser só um sonho. Enriquecimento financeiro não é coisa para gênios, é para todo mundo.
                    </LandingPageSectionParagraph>
                    <LandingPageSectionParagraph>
                        O mais importante é você querer investir e aumentar seu patrimônio, este é o primeiro passo. Depois disso, ter o conhecimento necessário para viabilizar a sua independência financeira nunca foi tão fácil. Com o Cripto Lucrativo você será capaz de planejar seus investimentos e gerenciar seus riscos, de maneira independente.
                    </LandingPageSectionParagraph>
                    <LandingPageSectionParagraph>
                        Você vai amar os resultados de se expor ao mercado de maneira planejada. E é muito simples, basta assistir o conteúdo das aulas e colocar em prática.
                        Junte-se a mim e aos milhões de investidores que ganham dinheiro no mercado de cripto ativos.
                    </LandingPageSectionParagraph>
                    <LandingPageSectionParagraph>
                        Entenda mais sobre o dinheiro do futuro. Comece a planejar seus investimentos agora mesmo!
                    </LandingPageSectionParagraph>
                </LandingPageSectionContainer>
                
                <img style={{width: "100%"}} src={mentoresCL} alt="mentores-cl" />
            </LandingPageContent>
        </LandingPageContainer>
    )
}