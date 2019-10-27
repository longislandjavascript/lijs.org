import React from "react";
import styled from "styled-components";
import { motion, MotionProps } from "framer-motion";
import Img from "gatsby-image";

const Link = styled(motion.a)<MotionProps>`
  display: flex;
  align-items: center;
`;

export type IconButtonProps = {
  link: string;
  src: any; // eslint-disable-line
};

const IconButton: React.FC<IconButtonProps> = ({ link, src }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
    >
      <Img fixed={src} />
    </Link>
  );
};

export { IconButton };
