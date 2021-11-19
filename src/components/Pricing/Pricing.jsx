import React from 'react'
import { Button } from '../../globalStyles';
import { ImStarEmpty, ImStarHalf, ImStarFull  } from 'react-icons/im'
import { IconContext } from 'react-icons/lib';
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.elements';

const Pricing = () => {
    return (
        <IconContext.Provider value={{ color: '#FFF', size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Tipos de Membresia</PricingHeading>
                    <PricingContainer>
                        <PricingCard to='/tienda'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                <ImStarEmpty />
                                </PricingCardIcon>
                                <PricingCardPlan>Oro</PricingCardPlan>
                                <PricingCardCost>$10,000</PricingCardCost>
                                <PricingCardLength>por año</PricingCardLength>
                                <PricingCardFeatures>
                                <PricingCardFeature>Ac. del 2%</PricingCardFeature>
                                <PricingCardFeature>Bono de 100 puntos</PricingCardFeature>
                                <PricingCardFeature>Subastas & Recompensas</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Elige un plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/tienda'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                <ImStarHalf />
                                </PricingCardIcon>
                                <PricingCardPlan>Platino</PricingCardPlan>
                                <PricingCardCost>$20,000</PricingCardCost>
                                <PricingCardLength>por año</PricingCardLength>
                                <PricingCardFeatures>
                                <PricingCardFeature>Ac. del 6%</PricingCardFeature>
                                <PricingCardFeature>Bono de 200 puntos</PricingCardFeature>
                                <PricingCardFeature>Premiación especial</PricingCardFeature>
                                <PricingCardFeature>Subastas & Recompensas</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Elige un plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/tienda'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                <ImStarFull />
                                </PricingCardIcon>
                                <PricingCardPlan>Diamante</PricingCardPlan>
                                <PricingCardCost>$45,000</PricingCardCost>
                                <PricingCardLength>por año</PricingCardLength>
                                <PricingCardFeatures>
                                <PricingCardFeature>Ac. del 10%</PricingCardFeature>
                                <PricingCardFeature>Bono de 300 puntos</PricingCardFeature>
                                <PricingCardFeature>Premiación especial</PricingCardFeature>
                                <PricingCardFeature>Subastas & Recompensas</PricingCardFeature>
                                <PricingCardFeature>Productos exclusivos</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Elige un plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
      );
}

export default Pricing
