import RetroPcIMG from '../../assets/images/image-retro-pcs.jpg';
import TopLangIMG from '../../assets/images/image-top-laptops.jpg';
import GamingImg from '../../assets/images/image-gaming-growth.jpg';
import InfoSection from './InfoSection';
import styled from 'styled-components';

const InfoMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 5rem;
`;

function Info() {
  return (
    <>
      <InfoMain>
        <InfoSection
          infoImagUrl={RetroPcIMG}
          infoId='01'
          infoHeading='Reviving Retro PCs'
          infoParagraph='What happens when old PCs are given modern upgrades?'
        />

        <InfoSection
          infoImagUrl={TopLangIMG}
          infoId='02'
          infoHeading='Top 10 Laptops of 2022'
          infoParagraph='Our best picks for various needs and budgets.'
        />

        <InfoSection
          infoImagUrl={GamingImg}
          infoId='03'
          infoHeading='The Growth of Gaming'
          infoParagraph='How the pandemic has sparked fresh opportunities.'
        />
      </InfoMain>
    </>
  );
}

export default Info;
