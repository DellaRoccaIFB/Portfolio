import React from "react";
import * as S from "./Header_style";

export default function Header() {
  return (
    <S.Header>
      <S.HeaderNav>
        <S.HeaderUl>
          <S.BorderCurriculumButton>
              <S.HeaderALink href="" target="_blank">
                Currículo
              </S.HeaderALink>
          </S.BorderCurriculumButton>
        </S.HeaderUl>
        <S.MenuHamburguer>
          <S.Barra/>
          <S.Barra/>
          <S.Barra/>
        </S.MenuHamburguer>
      </S.HeaderNav>
    </S.Header>
  );
}
