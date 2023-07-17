import { makeImgPath } from "utils";
import * as S from "assets/styles/componentsStyle";

interface BannerProps {
  data: IMovie;
}

function Banner({ data }: BannerProps) {
  return (
    <S.Banner $bgImg={makeImgPath(data.backdrop_path)}>
      <S.BannerTitle>{data.title}</S.BannerTitle>
      <S.Overview>{data.overview}</S.Overview>
    </S.Banner>
  )
}

export default Banner;