import styled from 'styled-components';

interface ISection {
  marginBottom?: string;
}

export const Section = styled.section<ISection>`
  margin-top: 40px;
  margin-bottom: ${({ marginBottom }) => marginBottom || ''};

  @media (min-width: 992px) {
    margin-top: 80px;
    margin-bottom: ${({ marginBottom }) => marginBottom || ''};
  }
`;
