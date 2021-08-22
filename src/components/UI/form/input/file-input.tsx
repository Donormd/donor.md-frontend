// import { FC, InputHTMLAttributes, LegacyRef, ChangeEvent, useState } from 'react';
// import styled from 'styled-components';
//
// // import Paperclip from '../images/icons/paperclip.svg';
// // import Close from '../images/icons/close.svg';
// import { bytesToMegabytes } from '../../../../helpers/converters';
//
// interface IProps extends InputHTMLAttributes<HTMLInputElement> {
//   className?: string;
//   disabled?: boolean;
//   innerRef?: LegacyRef<any>;
// }
//
// export const FileInput: FC<IProps> = ({ innerRef, className, ...rest }) => {
//   const [files, setFiles] = useState<File[] | null>(null);
//
//   const reset = () => setFiles(null);
//
//   const onChange = (data: ChangeEvent<HTMLInputElement>) => {
//     if (data.target.files) {
//       const array = Array.from(data.target.files);
//       array.length && setFiles(array);
//     }
//   };
//
//   return (
//     <Wrapper>
//       <ButtonGroup>
//         <InputLabel>
//           <StyledFileInput {...rest} type='file' onChange={onChange} ref={innerRef} multiple />
//           <HiddenInput className={className} isSelected={!!files}>
//             <PaperPicture>{/* <Paperclip /> */}</PaperPicture>
//             Attach Files
//           </HiddenInput>
//         </InputLabel>
//         {files && files.length > 1 && <CloseIcon onClick={reset} />}
//       </ButtonGroup>
//       <List>
//         {files &&
//           files.map((item) => (
//             <Item key={item.lastModified + item.size}>
//               {`${item.name} (${bytesToMegabytes(item.size)}MB)`}
//               {files && files.length === 1 && <CloseIcon onClick={reset} />}
//             </Item>
//           ))}
//       </List>
//     </Wrapper>
//   );
// };
//
// const Wrapper = styled.div`
//   display: flex;
//   align-items: flex-start;
//   flex-direction: column;
//   margin: 15px 0;
//
//   @media (min-width: ${({ theme }) => theme.media.md}) {
//     flex-direction: row;
//     align-items: center;
//   }
// `;
//
// const InputLabel = styled.label`
//   cursor: pointer;
// `;
//
// const StyledFileInput = styled.input<{ ref: any }>`
//   display: none;
//   cursor: pointer;
// `;
//
// const HiddenInput = styled.span<{ isSelected: boolean }>`
//   display: flex;
//   align-items: center;
//   background: white;
//   padding: 8px 16px;
//   border-radius: 33px;
//   width: max-content;
// eslint-disable-next-line max-len
//   color: ${({ theme, isSelected }) => (isSelected ? theme.colors.telegrey : theme.colors.darkGrey)};
//   background: ${({ theme, isSelected }) =>
//     isSelected ? theme.colors.smokyWhite : theme.colors.white};
//   border: 1px solid ${({ theme }) => theme.colors.silver};
// `;
//
// const List = styled.ul`
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   width: 100%;
//   margin-top: 15px;
//   margin-left: 15px;
//
//   @media (min-width: ${({ theme }) => theme.media.md}) {
//     flex-direction: row;
//     margin-top: 0;
//   }
// `;
//
// // const CloseIcon = styled(Close)`
// const CloseIcon = styled.div`
//   cursor: pointer;
//   width: 12px;
//   height: 12px;
// `;
//
// const Item = styled.li`
//   display: flex;
//   align-items: center;
//   font-size: 0.9375em;
//   font-weight: 600;
//   color: ${({ theme }) => theme.colors.deepBlue};
//   margin: 0 0 15px 0;
//
//   @media (min-width: ${({ theme }) => theme.media.md}) {
//     flex-direction: row;
//     margin: 0 15px 0 0;
//   }
//
//   ${CloseIcon} {
//     margin-left: 10px;
//   }
// `;
//
// const ButtonGroup = styled.div`
//   display: flex;
//   align-items: center;
//
//   ${CloseIcon} {
//     margin-left: 15px;
//   }
// `;
//
// const PaperPicture = styled.span`
//   margin-right: 5px;
//   height: 16px;
// `;

export const a = {};
