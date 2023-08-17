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
    ColoredArrowBendDownRight
} from "./styles";

import { 
    RocketLaunch, 
    Books, 
    Money, 
    DiscordLogo,
    ChartLine, 
    ChartPieSlice, 
    CurrencyDollar, 
    CurrencyEth,
    TerminalWindow, 
    Student, 
    UsersThree,
    CurrencyBtc,
    ShieldCheck,
    Handshake,
    MonitorPlay,
} from "phosphor-react";

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

export function LandingPage() {
    //React.useEffect(() => {
    //    window.scrollTo({top: 0, behavior: 'instant'});
    //}, []);

    const typewritterWords = [
        "dos investimentos em cripto",
        "das finanças descentralizadas (DEFI)",
        "da carteira de investimentos mais responsável",
        "do gerenciamento de risco e de capital",
        "da identificação dos topos e fundos",
        "das linhas de tendência de alta e baixa",
        "das estratégias de Fibonacci e Elliott", "dos padrões gráficos",
        "das ondas de impulsão e correção", "dos ciclos de mercado",
        "das estratégias de investimento", "das estratégias de trade",
        "das estratégias de DEFI", "da programação com e sem blockchain",
        "do desenvolvimento pessoal e profissional",
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
                                <RocketLaunch color="gold" size={64} weight="duotone" />
                            </LandingPageSectionActiveEducationCardHeader>
                            <p>A sua vontade, comportamentos e posturas adequadas em relação aos estudos e ao mercado são o pontapé inicial para o seu sucesso. As atitudes incluem aspectos como ética, motivação, trabalho em equipe, resiliência e adaptabilidade.</p>
                        </LandingPageSectionActiveEducationCard>
                        <LandingPageSectionActiveEducationCard>
                            <LandingPageSectionActiveEducationCardHeader>
                                <h2>Conhecimento</h2>
                                <Books color="chocolate" size={64} weight="duotone" />
                            </LandingPageSectionActiveEducationCardHeader>
                            <p>Você terá acesso ao conhecimento teórico e prático utilizado por investidores, traders e programadores que vivem do mundo cripto, por meio de vídeos para assistir quando preferir, além do conteúdo em lives e nas salas de texto e voz no Discord.</p>
                        </LandingPageSectionActiveEducationCard>
                        <LandingPageSectionActiveEducationCard>
                            <LandingPageSectionActiveEducationCardHeader>
                                <h2>Habilidades</h2>
                                <Money color="lime" size={64} weight="duotone" />
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
                            <CurrencyBtc color="chocolate" size={48} weight="bold" />
                            <h3>Análise de Fundamentos</h3>
                            <p>
                                Saiba como escolher os melhores projetos e com maior potencial para compor sua carteira
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <ChartLine color="darkcyan" size={48} weight="duotone" />
                            <h3>Análise Técnica</h3>
                            <p>
                                Aprenda a ler e interpretar os gráficos de forma profissional e melhore seus resultados
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <CurrencyDollar color="green" size={48} weight="bold" />
                            <h3>Análise de Liquidez</h3>
                            <p>
                                Entenda como funciona os pontos de stops, liquidações e reversões de tendência
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <ChartPieSlice color="red" size={48} weight="duotone" />
                            <h3>Gestão de Risco</h3>
                            <p>
                                Domine a gestão de risco e do capital para aumentar seus lucros e diminuir suas perdas
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <CurrencyEth color="orange" size={48} weight="duotone" />
                            <h3>DEFI</h3>
                            <p>
                                Conheça e utilize os protocolos de finanças descentralizadas para gerar renda passiva
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <TerminalWindow color="darkorchid" size={48} weight="duotone" />
                            <h3>Programação Web3</h3>
                            <p>
                                Desenvolva aplicações que geram e utilizam smart contracts e entre para o mercado de TI
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <Student color="lime" size={48} weight="duotone" />
                            <h3>Educação Ativa</h3>
                            <p>
                                Se torne especialista com o método de aprendizagem mais avançado, que une teoria e prática
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <UsersThree color="olive" size={48} weight="duotone" />
                            <h3>Mentorias</h3>
                            <p>
                                Mentoria no discord por texto e voz com profissionais que vivem do mercado
                            </p>
                        </LandingPageSectionWhyCLItem>
                        <LandingPageSectionWhyCLItem>
                            <DiscordLogo color="cornflowerblue" size={48} weight="duotone" />
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
                        <li><ColoredArrowBendDownRight size={32}/> Para quem deseja viver do mercado cripto, seja como especulador ou como maker</li>
                        <li><ColoredArrowBendDownRight size={32}/> Para quem está buscando liberdade financeira e independência financeira</li>
                        <li><ColoredArrowBendDownRight size={32}/> Para quem tem sede por conhecimento e quer conteúdo mais avançado para sair do amadorismo</li>
                        <li><ColoredArrowBendDownRight size={32}/> Para quem sabe a importância de um bom grupo para estudar e trabalhar junto e busca uma comunidade com interação por texto e voz</li>
                        <li><ColoredArrowBendDownRight size={32}/> Para quem quer aprender a investir, fazer trade, utilizar DEFI ou a programar aplicações com e sem blockchain</li>
                        <li><ColoredArrowBendDownRight size={32}/> Para quem quer ter um engenheiro de software, cientista da computação, empreendedor, investidor e trader como principal mentor de mercado</li>
                        <li><ColoredArrowBendDownRight size={32}/> Para quem cansou de perder dinheiro com trade e decidiu virar o jogo</li>
                    </LandingPageSectionWhoForList>
                </LandingPageSectionContainer>

                <LandingPageSectionContainer $index={7}>
                    <LandingPageSectionSafeAreaContent>
                        <LandingPageSectionSafeAreaItem>
                            <ShieldCheck size={64} weight="duotone" />
                            <LandingPageSectionSafeAreaText>
                                <h3>Pagamento Seguro</h3>
                                <p>Seus dados estão protegidos e sua compra é 100% segura</p>
                            </LandingPageSectionSafeAreaText>
                        </LandingPageSectionSafeAreaItem>
                        <LandingPageSectionSafeAreaItem>
                            <MonitorPlay size={64} weight="duotone" />
                            <LandingPageSectionSafeAreaText>
                                <h3>Acesso Imediato</h3>
                                <p>Seu login e senha serão enviados ao seu e-mail logo após o processamento do pagamento</p>
                            </LandingPageSectionSafeAreaText>
                        </LandingPageSectionSafeAreaItem>
                        <LandingPageSectionSafeAreaItem>
                            <Handshake size={64} weight="duotone" />
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
                    <LandingPageSectionParagraph>
                        Acordion com perguntas e respostas que só aparecem quando aberta
                    </LandingPageSectionParagraph>
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