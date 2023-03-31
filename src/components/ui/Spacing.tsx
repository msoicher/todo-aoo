import styled from "styled-components";

// Unused at the moment, unsure exactly what html element to use for this to work correctly.
const spacingMap = {
  "xx-small": "2px",
  "x-small": "4px",
  small: "8px",
  medium: "16px",
  large: "32px",
  "x-large": "64px",
};

type SpacingType =
  | "xx-small"
  | "x-small"
  | "small"
  | "medium"
  | "large"
  | "x-large";

type SpacingProps = {
  top?: SpacingType;
  bottom?: SpacingType;
  left?: SpacingType;
  right?: SpacingType;
};

export const Spacing = styled.span<SpacingProps>`
  height: 100%;
  width: 100%;
  ${({ top }) => top && `margin-top: ${spacingMap[top]};`}
  ${({ bottom }) => bottom && `margin-bottom: ${spacingMap[bottom]};`}
  ${({ left }) => left && `margin-left: ${spacingMap[left]};`}
  ${({ right }) => right && `margin-right: ${spacingMap[right]};`}
`;
