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
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Tipos de Membresia</PricingHeading>
                    <PricingContainer>
                        <PricingCard to='/carrito'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                <ImStarEmpty />
                                </PricingCardIcon>
                                <PricingCardPlan>Bronce</PricingCardPlan>
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
                        <PricingCard to='/carrito'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                <ImStarHalf />
                                </PricingCardIcon>
                                <PricingCardPlan>Plata</PricingCardPlan>
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
                        <PricingCard to='/carrito'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                <ImStarFull />
                                </PricingCardIcon>
                                <PricingCardPlan>Oro</PricingCardPlan>
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
