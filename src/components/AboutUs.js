import React from 'react';
import styled from 'styled-components';
import traditionalMotif from '../images/parva/firstpage1.webp';
import modernInterpretation from '../images/parva/firstpage2.webp';
import productionProcess from '../images/teniski-polo/3 поло-шърт тениска 60лв Гиздавата.webp';
import qualityControl from '../images/teniski-polo/2 поло-шърт тениска 65лв Богата.webp';
import productPhoto from '../images/parva/firstpage4.webp';

const AboutWrapper = styled.div`
  padding: 80px 20px;
  background-color: #fff;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background: linear-gradient(to right, #00966e, #2c3e50);
    border-radius: 2px;
  }
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #00966e;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 20px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AboutUs = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <Title>За Етно Бродери</Title>
        
        <Section>
          <Text>
            В Етно Бродери вярваме, че традицията е жива, когато я носим с гордост. Затова посвещаваме работата си на създаването на неповторими бродерии с български шевици – древни символи на сила, закрила и родова памет.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Какво ни вдъхновява</SectionTitle>
          <Text>
            Българската орнаментика е универсален език, който разказва истории за любов, благоденствие и смелост. Всяка шевица носи своя енергия – от деветте сили на живота до свещения кръст на слънцето. Вдъхновени от тези послания, ние превеждаме наследството на предците в естетика, разбираема за съвременния свят.
          </Text>
          <ImageGrid>
            <ProductImage src={traditionalMotif} alt="Традиционни мотиви" />
            <ProductImage src={modernInterpretation} alt="Съвременни интерпретации" />
          </ImageGrid>
        </Section>

        <Section>
          <SectionTitle>Нашият творчески процес</SectionTitle>
          <Text>
            <strong>Изследване и подбор на мотиви</strong><br />
            Проверяваме произхода на всеки орнамент, за да възстановим неговия автентичен вид и значение.
          </Text>
          <Text>
            <strong>Съвременен дизайн</strong><br />
            Прецизно адаптираме традиционните елементи, за да паснат на модерни силуети и материи, без да губят своята символика.
          </Text>
          <Text>
            <strong>Ръчна изработка и контрол на качеството</strong><br />
            От първия бод до последния детайл следим лично всяка стъпка, за да гарантираме издръжливост и безупречен вид.
          </Text>
          <ImageGrid>
            <ProductImage src={productionProcess} alt="Процес на изработка" />
            <ProductImage src={qualityControl} alt="Контрол на качеството" />
          </ImageGrid>
        </Section>

        <Section>
          <SectionTitle>Мисия и ценности</SectionTitle>
          <Text>
            • Популяризиране на културното богатство – стремим се хората у нас и по света да открият красотата и дълбочината на българските шевици.<br />
            • Връзка между поколенията – превръщаме традиционните символи в живо наследство, което може да се носи и обича днес, утре и след години.<br />
            • Уважение към майсторството – работим с внимание към детайла и с почит към народното изкуство, което ни е завещано.<br />
            • Честност и прозрачност – не правим компромис с автентичността на мотивите и ясно заявяваме произхода им.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Какво получавате с наш продукт</SectionTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div style={{ flex: '1' }}>
              <Text>
                • Дизайн, който разказва история – всеки бод има значение.<br />
                • Качествени материали, подбрани за удобство и дълъг живот.<br />
                • Подарък от българската душевност, подходящ за всяка възраст и повод.
              </Text>
            </div>
            <div style={{ flex: '1' }}>
              <ProductImage src={productPhoto} alt="Нашите продукти" />
            </div>
          </div>
        </Section>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default AboutUs; 