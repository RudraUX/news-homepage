import styled from 'styled-components';

interface InfoProp {
  infoImagUrl: string;
  infoId: string;
  infoHeading: string;
  infoParagraph: string;
}

const InfoElm = styled.div`
  display: flex;
  width: 22rem;
  margin-right: 1.5rem;
  img {
    height: 8rem;
    width: 7rem;
    margin-right: 1.5rem;
  }
  span {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--GrayishBlue);
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: var(--VeryDarkBlue);
    &:hover {
      color: var(--SoftRed);
    }
  }
  p {
    color: var(--DarkGrayishBlue);
    font-size: 1rem;
    line-height: 1.5;
  }
`;

function InfoSection({
  infoImagUrl,
  infoId,
  infoHeading,
  infoParagraph,
}: InfoProp) {
  return (
    <InfoElm>
      <img src={infoImagUrl} alt='Img' />
      <div>
        <span>{infoId}</span>
        <a href='#'>
          <h3>{infoHeading}</h3>
        </a>
        <p>{infoParagraph}</p>
      </div>
    </InfoElm>
  );
}

export default InfoSection;
