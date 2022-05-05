import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { List } from "components/List";

const LandingpagePage = () => {
  const navigate = useNavigate();

  const handleNavigate1 = () => navigate("/frame2043");

  return (
    <>
      <Column className="bg-white_A700 font-rubik items-center justify-end mx-[auto] overflow-auto w-[100%]">
        <Column className="items-center justify-start lg:mt-[35px] xl:mt-[40px] mt-[45.62px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
          <Row className="items-center justify-start w-[100%]">
            <aside className="items-center mb-[4.39px] lg:ml-[116px] xl:ml-[133px] ml-[150px] 3xl:ml-[180px] mt-[4.38px] xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] w-[7%]">
              <Column className="">
                <div className="overflow-x-auto w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Column className="items-center w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Image
                          src="img_standardcollec.svg"
                          className="lg:h-[29px] xl:h-[33px] h-[36.23px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[2px] lg:ml-[2px] ml-[3px] object-contain w-[24%]"
                          alt="StandardCollec"
                        />
                        <Text className="font-medium mb-[6.11px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[31px] xl:mr-[36px] mr-[40.8px] 2xl:mr-[40px] 3xl:mr-[48px] mt-[6.12px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`Miner`}</Text>
                      </Row>
                    </Column>
                    <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[3675px] xl:mt-[4203px] mt-[4725.77px] 2xl:mt-[4729px] 3xl:mt-[5674px] w-[70%]">
                      <Image
                        src="img_standardcollec.svg"
                        className="lg:h-[29px] xl:h-[33px] h-[36.23px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[35%]"
                        alt="StandardCollec"
                      />
                      <Text className="font-medium mb-[6.11px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[6.12px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left">{`Miner`}</Text>
                    </Row>
                    <Column className="mt-[105.35px] 2xl:mt-[105px] 3xl:mt-[126px] lg:mt-[81px] xl:mt-[93px] w-[100%]">
                      <Row className="lg:gap-[15px] xl:gap-[17px] gap-[20.000008px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-3 items-center justify-between xl:pl-[2px] lg:pl-[2px] pl-[3px] w-[100%]">
                        <Image
                          src="img_socmedfacebook.svg"
                          className="lg:h-[27px] xl:h-[30px] h-[33.6px] 2xl:h-[34px] 3xl:h-[41px] object-contain lg:w-[26px] xl:w-[29px] w-[33.6px] 2xl:w-[33px] 3xl:w-[40px]"
                          alt="SocmedFacebook"
                        />
                        <Image
                          src="img_socmedtwitter.svg"
                          className="lg:h-[27px] xl:h-[30px] h-[33.6px] 2xl:h-[34px] 3xl:h-[41px] object-contain lg:w-[26px] xl:w-[29px] w-[33.6px] 2xl:w-[33px] 3xl:w-[40px]"
                          alt="SocmedTwitter"
                        />
                        <Image
                          src="img_socmedinstagra.svg"
                          className="lg:h-[27px] xl:h-[30px] h-[33.6px] 2xl:h-[34px] 3xl:h-[41px] object-contain lg:w-[26px] xl:w-[29px] w-[33.6px] 2xl:w-[33px] 3xl:w-[40px]"
                          alt="SocmedInstagra"
                        />
                      </Row>
                    </Column>
                    <Text className="font-normal lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:mx-[17px] xl:mx-[19px] mx-[22px] 3xl:mx-[26px] not-italic text-bluegray_200 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19">{`©2022Miner`}</Text>
                  </Column>
                </div>
              </Column>
            </aside>
            <Row className="items-center justify-center lg:ml-[160px] xl:ml-[183px] ml-[206px] 3xl:ml-[247px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[17%]">
              <Text className="font-normal not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`About`}</Text>
              <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Features`}</Text>
              <Text className="font-normal lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Pricing`}</Text>
            </Row>
            <Text className="font-normal lg:mb-[11px] xl:mb-[13px] mb-[14.62px] 2xl:mb-[14px] 3xl:mb-[17px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] xl:mt-[10px] mt-[11.38px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Data Protection`}</Text>
            <Text className="font-normal lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Help`}</Text>
            <Text className="font-medium lg:ml-[116px] xl:ml-[133px] ml-[150px] 3xl:ml-[180px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left">{`Sign In`}</Text>
            <Button className="border border-indigo_A700 border-solid font-medium lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mr-[117px] xl:mr-[134px] mr-[150.86px] 2xl:mr-[150px] 3xl:mr-[181px] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[11px] xl:py-[12px] py-[14.375px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius50 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_A700 w-[10%]">{`Sign Up`}</Button>
          </Row>
          <Row className="items-end justify-start 3xl:mt-[106px] lg:mt-[68px] xl:mt-[78px] mt-[88.49px] 2xl:mt-[88px] w-[100%]">
            <Column className="items-start justify-start lg:ml-[116px] xl:ml-[133px] ml-[150px] 3xl:ml-[180px] lg:mt-[21px] xl:mt-[24px] mt-[27.66px] 2xl:mt-[27px] 3xl:mt-[33px] w-[39%]">
              <Text className="font-bold lg:leading-lh54 xl:leading-lh62 2xl:leading-lh70 leading-lh7000 3xl:leading-lh84 lg:text-fs38 xl:text-fs44 text-fs50 3xl:text-fs60 text-gray_900 text-left w-[100%]">
                <span className="text-gray_900 text-fs50 font-rubik text-left font-medium lg:text-fs38 xl:text-fs44 3xl:text-fs60">
                  <>{`Want anything to be easy with`}</>
                </span>
                <span className="text-gray_900 text-fs50 font-rubik text-left font-bold lg:text-fs38 xl:text-fs44 3xl:text-fs60">
                  <>{` `}</>
                </span>
                <span className="text-indigo_A700 text-fs50 font-rubik text-left font-bold lg:text-fs38 xl:text-fs44 3xl:text-fs60">
                  <>{`Miner`}</>
                </span>
                <span className="text-gray_900 text-fs50 font-rubik text-left font-bold lg:text-fs38 xl:text-fs44 3xl:text-fs60">
                  <>{`.`}</>
                </span>
              </Text>
              <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic text-bluegray_701 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[100%]">
                <span className="text-bluegray_701 text-fs16 font-rubik text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                  <>{`Provide a platform for all your data needs with easy automation and storage using `}</>
                </span>
                <span className="text-bluegray_701 text-fs16 font-rubik text-left font-medium lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                  <>{`Miner`}</>
                </span>
                <span className="text-bluegray_701 text-fs16 font-rubik text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                  <>{`. D`}</>
                </span>
                <span className="text-bluegray_701 text-fs16 font-rubik text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                  <>{`iscover a new way of anonymizing your data while filling your companies requirements. `}</>
                </span>
              </Text>
              <Stack className="3xl:h-[103px] lg:h-[67px] xl:h-[76px] h-[85.29px] 2xl:h-[86px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[45%]">
                <div className="absolute backdrop-opacity-[0.5] bg-indigo_A700_59 blur-[54.00px] bottom-[0] lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] inset-x-[0] mx-[auto] rounded-radius10 w-[85%]"></div>
                <Button className="absolute bg-indigo_A700 border-bw font-bold lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 top-[0] w-[100%]">{`Get Started`}</Button>
              </Stack>
            </Column>
            <Stack className="lg:h-[298px] xl:h-[341px] h-[382.44px] 2xl:h-[383px] 3xl:h-[460px] mb-[1px] lg:ml-[31px] xl:ml-[36px] ml-[40.76px] 2xl:ml-[40px] 3xl:ml-[48px] 3xl:mr-[100px] lg:mr-[65px] xl:mr-[74px] mr-[83.86px] 2xl:mr-[83px] w-[42%]">
              <Stack className="absolute lg:h-[298px] xl:h-[341px] h-[382.44px] 2xl:h-[383px] 3xl:h-[460px] inset-[0] w-[100%]">
                <Stack className="absolute lg:h-[298px] xl:h-[341px] h-[382.44px] 2xl:h-[383px] 3xl:h-[460px] inset-[0] w-[100%]">
                  <Stack className="absolute bottom-[0] lg:h-[166px] xl:h-[190px] h-[212.78px] 2xl:h-[213px] 3xl:h-[256px] left-[17%] w-[39%]">
                    <Stack className="absolute bottom-[0] lg:h-[144px] xl:h-[164px] h-[184.22px] 2xl:h-[185px] 3xl:h-[222px] inset-x-[0] w-[100%]">
                      <Image
                        src="img_vector28.png"
                        className="absolute lg:h-[144px] xl:h-[164px] h-[184.22px] 2xl:h-[185px] 3xl:h-[222px] inset-[0] object-contain w-[100%]"
                        alt="Vector28"
                      />
                      <div className="absolute bg-indigo_A700 lg:h-[29px] xl:h-[33px] h-[37.02px] 2xl:h-[38px] 3xl:h-[45px] right-[35%] rounded-radius1851 top-[0] w-[22%]"></div>
                    </Stack>
                    <Image
                      src="img_vector27.png"
                      className="absolute lg:h-[47px] xl:h-[54px] h-[59.89px] 2xl:h-[60px] 3xl:h-[72px] object-contain right-[34%] top-[0] w-[20%]"
                      alt="Vector27"
                    />
                    <Image
                      src="img_maskgroup.svg"
                      className="absolute lg:h-[47px] xl:h-[54px] h-[59.89px] 2xl:h-[60px] 3xl:h-[72px] object-contain right-[34%] top-[0] w-[20%]"
                      alt="MaskGroup"
                    />
                  </Stack>
                  <Stack className="absolute bottom-[0] lg:h-[161px] xl:h-[185px] h-[206.91px] 2xl:h-[208px] 3xl:h-[249px] left-[17%] w-[62%]">
                    <Image
                      src="img_vector29.png"
                      className="absolute bottom-[0] lg:h-[46px] xl:h-[52px] h-[57.9px] 2xl:h-[58px] 3xl:h-[70px] left-[0] object-contain w-[59%]"
                      alt="Vector29"
                    />
                    <Image
                      src="img_vector30.png"
                      className="absolute lg:h-[128px] xl:h-[146px] h-[163.4px] 2xl:h-[164px] 3xl:h-[197px] object-contain right-[20%] top-[0] w-[23%]"
                      alt="Vector30"
                    />
                    <Image
                      src="img_rectangle288.png"
                      className="absolute bottom-[1%] 3xl:h-[113px] lg:h-[73px] xl:h-[84px] h-[93.76px] 2xl:h-[94px] object-contain right-[0] rounded-radius31 w-[43%]"
                      alt="Rectangle288"
                    />
                    <div className="absolute bg-white_A700 bottom-[16%] lg:h-[21px] xl:h-[24px] h-[26.76px] 2xl:h-[27px] 3xl:h-[33px] right-[17%] rotate-[20deg] rounded-radius1338 w-[6%]"></div>
                  </Stack>
                  <Image
                    src="img_group1256.svg"
                    className="absolute bottom-[0] lg:h-[146px] xl:h-[167px] h-[186.64px] 2xl:h-[187px] 3xl:h-[225px] object-contain right-[0] w-[22%]"
                    alt="Group1256"
                  />
                  <Column className="absolute bottom-[0] items-start justify-start left-[0] w-[13%]">
                    <Image
                      src="img_vector47.png"
                      className="h-[108.95px] 2xl:h-[110px] 3xl:h-[131px] lg:h-[85px] xl:h-[97px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] object-contain w-[86%]"
                      alt="Vector47"
                    />
                    <Column className="items-end 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.42px] 2xl:mt-[8px] w-[100%]">
                      <Image
                        src="img_group1257.png"
                        className="lg:h-[46px] xl:h-[53px] h-[59.07px] 2xl:h-[60px] 3xl:h-[71px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain w-[87%]"
                        alt="Group1257"
                      />
                    </Column>
                  </Column>
                  <Row className="absolute items-start justify-between left-[2%] top-[0] w-[63%]">
                    <Column className="items-start justify-start w-[32%]">
                      <Image
                        src="img_group1263.png"
                        className="lg:h-[62px] xl:h-[71px] h-[79.45px] 2xl:h-[80px] 3xl:h-[96px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] object-contain w-[82%]"
                        alt="Group1263"
                      />
                      <Column className="items-end xl:mb-[3px] lg:mb-[3px] mb-[4.12px] 3xl:mb-[4px] 2xl:mb-[4px] lg:mt-[46px] xl:mt-[52px] mt-[59.46px] 2xl:mt-[59px] 3xl:mt-[71px] w-[100%]">
                        <Stack className="border-bw19 border-gray_300 border-solid lg:h-[36px] xl:h-[41px] h-[45.369995px] 2xl:h-[46px] 3xl:h-[55px] mx-[10.99px] 2xl:mx-[10px] 3xl:mx-[13px] lg:mx-[8px] xl:mx-[9px] opacity-op5 rounded-radius475 w-[35%]">
                          <div className="absolute bg-indigo_A700 lg:h-[26px] xl:h-[29px] h-[32.3px] 2xl:h-[33px] 3xl:h-[39px] inset-y-[0] left-[6%] my-[auto] lg:w-[25px] xl:w-[28px] w-[32.3px] 2xl:w-[32px] 3xl:w-[38px]"></div>
                          <div className="absolute bg-white_A700 lg:h-[36px] xl:h-[41px] h-[45.37px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] opacity-op5 w-[100%]"></div>
                        </Stack>
                      </Column>
                    </Column>
                    <Image
                      src="img_group1265.svg"
                      className="lg:h-[46px] xl:h-[53px] h-[59.1px] 2xl:h-[60px] 3xl:h-[71px] lg:mb-[100px] xl:mb-[114px] mb-[129.18px] 2xl:mb-[129px] 3xl:mb-[155px] mt-[1px] object-contain w-[20%]"
                      alt="Group1265"
                    />
                  </Row>
                </Stack>
                <Column className="absolute bottom-[0] items-start justify-start left-[28%] w-[27%]">
                  <Stack className="xl:h-[112px] h-[125.89px] 2xl:h-[126px] 3xl:h-[152px] lg:h-[98px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[70%]">
                    <Image
                      src="img_vector17.png"
                      className="absolute bottom-[0] 3xl:h-[116px] lg:h-[76px] xl:h-[86px] h-[96.46px] 2xl:h-[97px] object-contain right-[4%] w-[80%]"
                      alt="Vector17"
                    />
                    <Image
                      src="img_vector19.svg"
                      className="absolute lg:h-[18px] xl:h-[21px] h-[22.71px] 2xl:h-[23px] 3xl:h-[28px] left-[0] object-contain top-[5%] w-[29%]"
                      alt="Vector19"
                    />
                    <Image
                      src="img_vector26.svg"
                      className="absolute bottom-[30%] lg:h-[15px] xl:h-[17px] h-[18.89px] 2xl:h-[19px] 3xl:h-[23px] left-[39%] object-contain w-[13%]"
                      alt="Vector26"
                    />
                    <Image
                      src="img_vector18.svg"
                      className="absolute xl:h-[101px] h-[112.5px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[88px] object-contain right-[0] top-[0] w-[92%]"
                      alt="Vector18"
                    />
                    <Image
                      src="img_vector20.svg"
                      className="absolute lg:h-[49px] xl:h-[56px] h-[61.84px] 2xl:h-[62px] 3xl:h-[75px] object-contain right-[12%] top-[0] w-[70%]"
                      alt="Vector20"
                    />
                    <Image
                      src="img_subtract.svg"
                      className="absolute bottom-[20%] lg:h-[25px] xl:h-[29px] h-[31.48px] 2xl:h-[32px] 3xl:h-[38px] object-contain right-[0] w-[50%]"
                      alt="Subtract"
                    />
                  </Stack>
                  <Column className="items-end lg:mt-[147px] xl:mt-[168px] mt-[189.78px] 2xl:mt-[189px] 3xl:mt-[227px] w-[100%]">
                    <Image
                      src="img_rectangle289.svg"
                      className="h-[6.9px] lg:h-[6px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain w-[42%]"
                      alt="Rectangle289"
                    />
                  </Column>
                </Column>
              </Stack>
              <Row className="absolute bottom-[3%] items-start justify-end right-[10%] w-[63%]">
                <Column className="items-start justify-start w-[41%]">
                  <Column className="items-end w-[100%]">
                    <Image
                      src="img_vector49.svg"
                      className="h-[11.42px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:mx-[39px] xl:mx-[45px] mx-[50.91px] 2xl:mx-[50px] 3xl:mx-[61px] object-contain w-[15%]"
                      alt="Vector49"
                    />
                  </Column>
                  <Column className="items-center lg:mt-[31px] xl:mt-[36px] mt-[40.8px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                    <Row className="items-end justify-start w-[100%]">
                      <Image
                        src="img_group15.svg"
                        className="lg:h-[37px] xl:h-[43px] h-[47.22px] 2xl:h-[48px] 3xl:h-[57px] lg:ml-[10px] xl:ml-[12px] ml-[13.82px] 2xl:ml-[13px] 3xl:ml-[16px] object-contain w-[25%]"
                        alt="Group15"
                      />
                      <Image
                        src="img_vector25.svg"
                        className="lg:h-[14px] xl:h-[16px] h-[17.8px] 2xl:h-[18px] 3xl:h-[22px] mb-[2.91px] 2xl:mb-[2px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] lg:ml-[12px] xl:ml-[14px] ml-[16.01px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[20px] xl:mt-[23px] mt-[26.51px] 2xl:mt-[26px] 3xl:mt-[31px] object-contain opacity-op5 w-[13%]"
                        alt="Vector25"
                      />
                      <Image
                        src="img_vector24.svg"
                        className="lg:h-[16px] xl:h-[18px] h-[19.44px] 2xl:h-[20px] 3xl:h-[24px] 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] mb-[8.35px] 2xl:mb-[8px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.89px] 2xl:ml-[8px] lg:mr-[29px] xl:mr-[33px] mr-[37.6px] 2xl:mr-[37px] 3xl:mr-[45px] lg:mt-[15px] xl:mt-[17px] mt-[19.43px] 2xl:mt-[19px] 3xl:mt-[23px] object-contain opacity-op5 w-[13%]"
                        alt="Vector24"
                      />
                    </Row>
                    <Row className="items-end justify-between lg:mt-[115px] xl:mt-[132px] mt-[148.66px] 2xl:mt-[148px] 3xl:mt-[178px] w-[100%]">
                      <Line className="bg-bluegray_800 lg:h-[19px] xl:h-[22px] h-[24.29px] 2xl:h-[25px] 3xl:h-[30px] w-[3.09px]" />
                      <Stack className="lg:h-[12px] xl:h-[13px] h-[14.56px] 2xl:h-[15px] 3xl:h-[18px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:mr-[10px] xl:mr-[11px] mr-[12.92px] 2xl:mr-[12px] 3xl:mr-[15px] lg:mt-[4px] mt-[5.73px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[2%]">
                        <Image
                          src="img_vector32.svg"
                          className="absolute lg:h-[12px] xl:h-[13px] h-[14.5px] 2xl:h-[15px] 3xl:h-[18px] inset-y-[0] my-[auto] object-contain right-[0] w-[25%]"
                          alt="Vector32"
                        />
                        <Image
                          src="img_vector33.svg"
                          className="absolute h-[5.38px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] left-[0] object-contain top-[0] w-[76%]"
                          alt="Vector33"
                        />
                      </Stack>
                    </Row>
                    <Row className="items-end justify-end mb-[0] xl:mt-[3px] lg:mt-[3px] mt-[4.04px] 3xl:mt-[4px] 2xl:mt-[4px] w-[100%]">
                      <Column className="items-start justify-start xl:mb-[3px] lg:mb-[3px] mb-[4.48px] 2xl:mb-[4px] 3xl:mb-[5px] lg:ml-[63px] xl:ml-[72px] ml-[81.59px] 2xl:ml-[81px] 3xl:ml-[97px] w-[11%]">
                        <Column className="w-[100%]">
                          <div className="bg-gradient  lg:h-[5px] h-[6.08px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rotate-[6deg] rounded-radius2848 w-[100%]"></div>
                        </Column>
                        <Image
                          src="img_vector51.svg"
                          className="lg:h-[22px] xl:h-[25px] h-[27.65px] 2xl:h-[28px] 3xl:h-[34px] xl:ml-[1px] lg:ml-[1px] ml-[2.21px] 3xl:ml-[2px] 2xl:ml-[2px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] object-contain w-[62%]"
                          alt="Vector51"
                        />
                      </Column>
                      <Stack className="lg:h-[19px] xl:h-[22px] h-[24.09px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[26px] xl:ml-[30px] ml-[33.78px] 2xl:ml-[33px] 3xl:ml-[40px] xl:mt-[11px] mt-[12.65px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[15%]">
                        <Image
                          src="img_vector34.svg"
                          className="absolute bottom-[9%] h-[10.88px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[14px] lg:h-[9px] left-[0] object-contain w-[37%]"
                          alt="Vector34"
                        />
                        <Image
                          src="img_vector35.svg"
                          className="absolute bottom-[7%] lg:h-[14px] xl:h-[16px] h-[17.46px] 2xl:h-[18px] 3xl:h-[21px] left-[12%] object-contain w-[58%]"
                          alt="Vector35"
                        />
                        <Image
                          src="img_vector36.svg"
                          className="absolute lg:h-[19px] xl:h-[22px] h-[24.09px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[0] w-[72%]"
                          alt="Vector36"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Column>
                <Image
                  src="img_vector50.svg"
                  className="lg:h-[16px] xl:h-[18px] h-[19.67px] 2xl:h-[20px] 3xl:h-[24px] 3xl:mb-[108px] lg:mb-[70px] xl:mb-[80px] mb-[90.47px] 2xl:mb-[90px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.89px] 2xl:ml-[9px] lg:mt-[157px] xl:mt-[180px] mt-[203.03px] 2xl:mt-[203px] 3xl:mt-[243px] object-contain w-[3%]"
                  alt="Vector50"
                />
                <Row className="items-start justify-center lg:mb-[132px] xl:mb-[151px] mb-[169.84px] 2xl:mb-[169px] 3xl:mb-[203px] lg:ml-[14px] xl:ml-[16px] ml-[18.72px] 2xl:ml-[18px] 3xl:ml-[22px] xl:mt-[109px] mt-[123.45px] 2xl:mt-[123px] 3xl:mt-[148px] lg:mt-[96px] w-[5%]">
                  <Image
                    src="img_vector39.svg"
                    className="h-[11.55px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mb-[0] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.33px] 2xl:mt-[8px] object-contain w-[21%]"
                    alt="Vector39"
                  />
                  <Image
                    src="img_vector41.svg"
                    className="h-[10.74px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] xl:mb-[4px] lg:mb-[4px] mb-[5.55px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[1px] ml-[2.34px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] lg:mt-[2px] mt-[3.59px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] object-contain w-[22%]"
                    alt="Vector41"
                  />
                  <Image
                    src="img_vector40.svg"
                    className="h-[10.57px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] mb-[9.31px] 2xl:mb-[9px] lg:ml-[3px] ml-[4.81px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mr-[0] object-contain w-[21%]"
                    alt="Vector40"
                  />
                </Row>
                <Image
                  src="img_vector42.svg"
                  className="3xl:h-[10px] lg:h-[6px] h-[7.5px] xl:h-[7px] 2xl:h-[8px] lg:mb-[135px] xl:mb-[154px] mb-[174px] 3xl:mb-[208px] ml-[10.19px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:mt-[102px] xl:mt-[117px] mt-[131.67px] 2xl:mt-[131px] 3xl:mt-[158px] object-contain w-[1%]"
                  alt="Vector42"
                />
                <Image
                  src="img_group1266.svg"
                  className="lg:h-[65px] xl:h-[74px] h-[82.37px] 2xl:h-[83px] 3xl:h-[99px] lg:mb-[174px] xl:mb-[199px] mb-[223.88px] 2xl:mb-[224px] 3xl:mb-[268px] lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:mt-[5px] mt-[6.92px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] object-contain w-[29%]"
                  alt="Group1266"
                />
              </Row>
            </Stack>
          </Row>
          <Stack className="lg:h-[189px] xl:h-[216px] h-[242.02px] 2xl:h-[243px] 3xl:h-[291px] mt-[102.49px] 2xl:mt-[102px] 3xl:mt-[123px] lg:mt-[79px] xl:mt-[91px] mx-[auto] w-[79%]">
            <div className="absolute backdrop-opacity-[0.06] bg-gray_901 blur-[114.00px] bottom-[0] lg:h-[148px] xl:h-[169px] h-[189.22px] 2xl:h-[190px] 3xl:h-[228px] inset-x-[0] mx-[auto] rounded-radius10 w-[94%]"></div>
            <Row className="absolute bg-white_A700 items-center justify-end rounded-radius10 top-[0] w-[100%]">
              <Image
                src="img_iconuser.svg"
                className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] ml-[91px] lg:my-[56px] xl:my-[64px] my-[72.5px] 2xl:my-[72px] 3xl:my-[87px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                alt="Iconuser"
              />
              <Column className="items-start lg:ml-[28px] xl:ml-[32px] ml-[36.5px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[52px] xl:my-[60px] my-[67.5px] 2xl:my-[67px] 3xl:my-[81px] w-[5%]">
                <Text className="font-bold xl:mr-[3px] lg:mr-[3px] mr-[4px] lg:text-fs19 xl:text-fs22 text-fs25 3xl:text-fs30 text-gray_900 text-left">{`90+`}</Text>
                <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_700 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left">{`Users`}</Text>
              </Column>
              <Line className="bg-bluegray_50 xl:h-[112px] h-[125.57px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] mb-[37.22px] lg:ml-[101px] xl:ml-[115px] ml-[130px] 3xl:ml-[156px] mt-[37.21px] lg:my-[28px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[44px] w-[2px]" />
              <Image
                src="img_iconlocation.svg"
                className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] lg:my-[56px] xl:my-[64px] my-[72.5px] 2xl:my-[72px] 3xl:my-[87px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                alt="Iconlocation"
              />
              <Column className="items-start lg:ml-[28px] xl:ml-[32px] ml-[36.5px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[52px] xl:my-[60px] my-[67.5px] 2xl:my-[67px] 3xl:my-[81px] w-[8%]">
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs19 xl:text-fs22 text-fs25 3xl:text-fs30 text-gray_900 text-left">{`30+`}</Text>
                <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_700 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left">{`Locations`}</Text>
              </Column>
              <Line className="bg-bluegray_50 xl:h-[112px] h-[125.57px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[98px] mb-[37.22px] lg:ml-[104px] xl:ml-[119px] ml-[134.5px] 2xl:ml-[134px] 3xl:ml-[161px] mt-[37.21px] lg:my-[28px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[44px] w-[2px]" />
              <Image
                src="img_iconserver.svg"
                className="lg:h-[43px] xl:h-[49px] h-[55px] 2xl:h-[56px] 3xl:h-[67px] 3xl:ml-[107px] lg:ml-[69px] xl:ml-[79px] ml-[89.5px] 2xl:ml-[89px] lg:my-[56px] xl:my-[64px] my-[72.5px] 2xl:my-[72px] 3xl:my-[87px] object-contain lg:w-[42px] xl:w-[48px] w-[55px] 3xl:w-[66px]"
                alt="IconServer"
              />
              <Column className="items-start lg:ml-[28px] xl:ml-[32px] ml-[36.5px] 2xl:ml-[36px] 3xl:ml-[43px] 3xl:mr-[108px] lg:mr-[70px] xl:mr-[80px] mr-[90.5px] 2xl:mr-[90px] lg:my-[52px] xl:my-[60px] my-[67.5px] 2xl:my-[67px] 3xl:my-[81px] w-[6%]">
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs19 xl:text-fs22 text-fs25 3xl:text-fs30 text-gray_900 text-left">{`50+`}</Text>
                <Text className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_700 lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left">{`Servers`}</Text>
              </Column>
            </Row>
          </Stack>
          <Row className="items-end justify-end lg:mt-[41px] xl:mt-[47px] mt-[53.81px] 2xl:mt-[53px] 3xl:mt-[64px] w-[100%]">
            <Image
              src="img_illustration2.png"
              className="lg:h-[323px] xl:h-[369px] h-[414.71px] 2xl:h-[415px] 3xl:h-[498px] xl:mb-[3px] lg:mb-[3px] mb-[4.46px] 2xl:mb-[4px] 3xl:mb-[5px] lg:ml-[143px] xl:ml-[164px] ml-[184.52px] 2xl:ml-[184px] 3xl:ml-[221px] object-contain w-[35%]"
              alt="Illustration2"
            />
            <Column className="items-start justify-start lg:ml-[131px] xl:ml-[150px] ml-[169.48px] 2xl:ml-[169px] 3xl:ml-[203px] lg:mr-[117px] xl:mr-[134px] mr-[150.86px] 2xl:mr-[150px] 3xl:mr-[181px] lg:mt-[42px] xl:mt-[48px] mt-[54.17px] 2xl:mt-[54px] 3xl:mt-[65px] w-[30%]">
              <Text className="font-medium lg:leading-lh38 xl:leading-lh44 2xl:leading-lh50 leading-lh5000 3xl:leading-lh60 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs27 xl:text-fs31 text-fs35 3xl:text-fs42 text-gray_900 text-left w-[90%]">{`We Provide Many Features You Can Use`}</Text>
              <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic text-bluegray_701 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[100%]">{`You can explore the features that we provide with convenience and efficiency.`}</Text>
              <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Row className="items-center justify-start w-[100%]">
                  <Image
                    src="img_group1120.svg"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Group1120"
                  />
                  <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 ml-[10.08px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[141px] xl:mr-[161px] mr-[181.8px] 2xl:mr-[181px] 3xl:mr-[218px] not-italic text-bluegray_700 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[50%]">{`Easy data collection and filtering`}</Text>
                </Row>
                <Row className="items-end justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.45px] 2xl:mt-[8px] w-[100%]">
                  <Image
                    src="img_group1120.svg"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9.55px] 2xl:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Group1121"
                  />
                  <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mb-[2px] mb-[3.55px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.88px] 2xl:ml-[9px] lg:mr-[204px] xl:mr-[233px] mr-[263px] 3xl:mr-[315px] not-italic text-bluegray_700 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[31%]">{`Personalized tokens`}</Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[100%]">
                  <Image
                    src="img_group1120.svg"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Group1122"
                  />
                  <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 ml-[10.08px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[214px] xl:mr-[245px] mr-[275.8px] 2xl:mr-[275px] 3xl:mr-[331px] not-italic text-bluegray_700 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[28%]">{`Supercharged API`}</Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Image
                    src="img_group1120.svg"
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="bxbxscheckci"
                  />
                  <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 ml-[10.08px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[223px] xl:mr-[255px] mr-[286.8px] 2xl:mr-[286px] 3xl:mr-[344px] not-italic text-bluegray_700 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[25%]">{`Self-automation`}</Text>
                </Row>
              </Column>
            </Column>
          </Row>
          <Column className="bg-gradient1  items-center justify-start xl:mt-[112px] mt-[126.73px] 2xl:mt-[126px] 3xl:mt-[152px] lg:mt-[98px] w-[100%]">
            <Text className="font-medium lg:mt-[62px] xl:mt-[71px] mt-[80.27px] 2xl:mt-[80px] 3xl:mt-[96px] mx-[auto] text-center lg:text-fs27 xl:text-fs31 text-fs35 3xl:text-fs42 text-gray_900">{`Choose Your Plan`}</Text>
            <Text className="font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] not-italic text-bluegray_701 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19">{`Let's choose the package that is best for you and/or your company!`}</Text>
            <List
              className="lg:gap-[38px] xl:gap-[44px] gap-[50px] 3xl:gap-[60px] grid grid-cols-3 min-h-[auto] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] mt-[90px] mx-[auto] w-[76%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 border-2 border-gray_301 border-solid items-center justify-end rounded-radius10 w-[100%]">
                <Image
                  src="img_illustrationfr.png"
                  className="lg:h-[129px] xl:h-[148px] h-[165.37px] 2xl:h-[166px] 3xl:h-[199px] lg:mt-[61px] xl:mt-[70px] mt-[79.63px] 2xl:mt-[79px] 3xl:mt-[95px] mx-[auto] object-contain w-[44%]"
                  alt="IllustrationFr"
                />
                <Text className="font-medium lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900">{`Free Plan`}</Text>
                <Column className="items-start justify-start lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Row className="items-center justify-center mx-[auto] w-[55%]">
                      <Image
                        src="img_group1223.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Group1223"
                      />
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[17px] ml-[20.17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[75%]">{`Unlimited Bandwitch`}</Text>
                    </Row>
                    <Row className="items-center justify-center mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] w-[58%]">
                      <Image
                        src="img_group1223.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Group1223"
                      />
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[18px] ml-[20.24px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[77%]">{`Encrypted Connection`}</Text>
                    </Row>
                  </Column>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[54px] xl:mx-[62px] mx-[70.13px] 2xl:mx-[70px] 3xl:mx-[84px] w-[42%]">
                    <Image
                      src="img_group1223.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Group1224"
                    />
                    <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[68%]">{`No Traffic Logs`}</Text>
                  </Row>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[54px] xl:mx-[62px] mx-[69.87px] 2xl:mx-[69px] 3xl:mx-[83px] w-[53%]">
                    <Image
                      src="img_group1223.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Group1225"
                    />
                    <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[18px] ml-[20.26px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[75%]">{`Works on All Devices`}</Text>
                  </Row>
                </Column>
                <Text className="font-medium lg:mt-[101px] xl:mt-[115px] mt-[130px] 3xl:mt-[156px] mx-[auto] text-center lg:text-fs19 xl:text-fs22 text-fs25 3xl:text-fs30 text-gray_900">{`Free`}</Text>
                <Button className="border-2 border-indigo_A700 border-solid font-bold lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[11px] xl:py-[12px] py-[14.375px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius50 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_A700 w-[54%]">{`Select`}</Button>
              </Column>
              <Column className="bg-white_A700 border-2 border-gray_301 border-solid items-center justify-end rounded-radius10 w-[100%]">
                <Image
                  src="img_illustrationst.png"
                  className="lg:h-[129px] xl:h-[148px] h-[165.37px] 2xl:h-[166px] 3xl:h-[199px] lg:mt-[61px] xl:mt-[70px] mt-[79.63px] 2xl:mt-[79px] 3xl:mt-[95px] mx-[auto] object-contain w-[44%]"
                  alt="IllustrationSt"
                />
                <Text className="font-medium lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900">{`Standard Plan`}</Text>
                <Column className="items-start justify-start lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Row className="items-center justify-center mx-[auto] w-[55%]">
                      <Image
                        src="img_group1226.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Group1226"
                      />
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[18px] ml-[20.36px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[75%]">{`Unlimited Bandwitch`}</Text>
                    </Row>
                    <Row className="items-center justify-center mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] w-[58%]">
                      <Image
                        src="img_group1226.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Group1227"
                      />
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[17px] ml-[20.18px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[77%]">{`Encrypted Connection`}</Text>
                    </Row>
                  </Column>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[54px] xl:mx-[62px] mx-[69.73px] 2xl:mx-[69px] 3xl:mx-[83px] w-[44%]">
                    <Image
                      src="img_group1226.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Group1228"
                    />
                    <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[18px] ml-[20.54px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[69%]">{`Yes Traffic Logs`}</Text>
                  </Row>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[54px] xl:mx-[62px] mx-[69.73px] 2xl:mx-[69px] 3xl:mx-[83px] w-[53%]">
                    <Image
                      src="img_group1226.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Group1229"
                    />
                    <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[18px] ml-[20.54px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[75%]">{`Works on All Devices`}</Text>
                  </Row>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[54px] xl:mx-[62px] mx-[70.27px] 2xl:mx-[70px] 3xl:mx-[84px] w-[48%]">
                    <Image
                      src="img_group1226.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Group1230"
                    />
                    <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[73%]">{`Connect Anyware`}</Text>
                  </Row>
                  <Column className="items-end lg:mt-[5px] xl:mt-[6px] mt-[7.45px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                    <Row className="items-center justify-end lg:mx-[22px] xl:mx-[25px] mx-[29px] 3xl:mx-[34px] w-[69%]">
                      <Image
                        src="img_group1226.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Group1230"
                      />
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[81%]">{`Limited Personalized Tokens`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Text className="font-medium lg:mt-[40px] xl:mt-[46px] mt-[52.55px] 2xl:mt-[52px] 3xl:mt-[63px] mx-[auto] text-center lg:text-fs19 xl:text-fs22 text-fs25 3xl:text-fs30 text-gray_900">
                  <span className="text-gray_900 text-fs25 font-rubik text-center font-medium lg:text-fs19 xl:text-fs22 3xl:text-fs30">
                    <>{`$13 `}</>
                  </span>
                  <span className="text-bluegray_700 text-fs25 font-rubik text-center font-normal lg:text-fs19 xl:text-fs22 3xl:text-fs30">
                    <>{`/ mo`}</>
                  </span>
                </Text>
                <Button className="border-2 border-indigo_A700 border-solid font-bold lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[11px] xl:py-[12px] py-[14.375px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius50 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-indigo_A700 w-[54%]">{`Select`}</Button>
              </Column>
              <Column className="bg-white_A700 border-2 border-indigo_A700 border-solid items-center justify-center rounded-radius10 w-[100%]">
                <Image
                  src="img_illustrationpr.png"
                  className="lg:h-[129px] xl:h-[148px] h-[165.37px] 2xl:h-[166px] 3xl:h-[199px] lg:mt-[61px] xl:mt-[70px] mt-[79.63px] 2xl:mt-[79px] 3xl:mt-[95px] mx-[auto] object-contain w-[44%]"
                  alt="IllustrationPr"
                />
                <Text className="font-medium lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900">{`Premium Plan`}</Text>
                <Column className="items-start justify-start lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Row className="items-center justify-center mx-[auto] w-[55%]">
                      <Image
                        src="img_group1226.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Group1235"
                      />
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[18px] ml-[20.36px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[75%]">{`Unlimited Bandwitch`}</Text>
                    </Row>
                    <Row className="items-center justify-center mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] w-[58%]">
                      <Image
                        src="img_group1226.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Group1231"
                      />
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[17px] ml-[20.18px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[77%]">{`Encrypted Connection`}</Text>
                    </Row>
                  </Column>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[54px] xl:mx-[62px] mx-[69.73px] 2xl:mx-[69px] 3xl:mx-[83px] w-[44%]">
                    <Image
                      src="img_group1226.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Group1232"
                    />
                    <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[18px] ml-[20.54px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[69%]">{`Yes Traffic Logs`}</Text>
                  </Row>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[54px] xl:mx-[62px] mx-[69.73px] 2xl:mx-[69px] 3xl:mx-[83px] w-[53%]">
                    <Image
                      src="img_group1226.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Group1233"
                    />
                    <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[18px] ml-[20.54px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[75%]">{`Works on All Devices`}</Text>
                  </Row>
                  <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[54px] xl:mx-[62px] mx-[70.27px] 2xl:mx-[70px] 3xl:mx-[84px] w-[51%]">
                    <Image
                      src="img_group1226.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Group1234"
                    />
                    <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[74%]">{`Connect Anywhere`}</Text>
                  </Row>
                  <Column className="items-end mt-[10.45px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
                    <Row className="items-start justify-end lg:mx-[24px] xl:mx-[27px] mx-[31px] 3xl:mx-[37px] w-[69%]">
                      <Image
                        src="img_group1226.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[25px] xl:mb-[29px] mb-[33px] 3xl:mb-[39px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Group1236"
                      />
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic text-bluegray_701 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left w-[81%]">{`Unlimitied Personalized Tokens`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Text className="font-medium lg:mt-[15px] xl:mt-[17px] mt-[19.55px] 2xl:mt-[19px] 3xl:mt-[23px] mx-[auto] text-center lg:text-fs19 xl:text-fs22 text-fs25 3xl:text-fs30 text-gray_900">
                  <span className="text-gray_900 text-fs25 font-rubik text-center font-medium lg:text-fs19 xl:text-fs22 3xl:text-fs30">
                    <>{`$20 `}</>
                  </span>
                  <span className="text-bluegray_700 text-fs25 font-rubik text-center font-normal lg:text-fs19 xl:text-fs22 3xl:text-fs30">
                    <>{`/ mo`}</>
                  </span>
                </Text>
                <Stack className="lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] lg:mb-[25px] xl:mb-[29px] mb-[33px] 3xl:mb-[39px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] w-[54%]">
                  <div className="absolute backdrop-opacity-[0.5] bg-indigo_A700_59 blur-[54.00px] bottom-[0] lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] inset-x-[0] mx-[auto] rounded-radius60 w-[72%]"></div>
                  <Button className="absolute bg-indigo_A700 border-bw font-bold lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[11px] xl:py-[12px] py-[14.375px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius50 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 top-[0] w-[100%]">{`Select`}</Button>
                </Stack>
              </Column>
            </List>
            <Text className="font-medium lg:leading-lh38 xl:leading-lh44 2xl:leading-lh50 leading-lh5000 3xl:leading-lh60 lg:mt-[148px] xl:mt-[169px] mt-[190.45px] 2xl:mt-[190px] 3xl:mt-[228px] mx-[auto] text-center lg:text-fs27 xl:text-fs31 text-fs35 3xl:text-fs42 text-gray_900 w-[30%]">{`Global Servers to Access Data Anywhere!`}</Text>
            <Text className="font-normal mt-[10.55px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] mx-[auto] not-italic text-bluegray_701 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19">
              <span className="text-bluegray_701 text-fs16 font-rubik text-center font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{`See `}</>
              </span>
              <span className="text-bluegray_701 text-fs16 font-rubik text-center font-medium lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{`Miner`}</>
              </span>
              <span className="text-bluegray_701 text-fs16 font-rubik text-center font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{` everywhere to make it easier for you when you move locations.`}</>
              </span>
            </Text>
            <Image
              src="img_hugeglobal.svg"
              className="lg:h-[419px] xl:h-[479px] h-[537.77px] 2xl:h-[539px] 3xl:h-[646px] lg:mb-[22px] xl:mb-[26px] mb-[29.35px] 2xl:mb-[29px] 3xl:mb-[35px] lg:mt-[120px] xl:mt-[137px] mt-[154.81px] 2xl:mt-[154px] 3xl:mt-[185px] mx-[auto] object-contain w-[74%]"
              alt="HugeGlobal"
            />
          </Column>
          <Column className="items-center justify-start lg:mt-[162px] xl:mt-[185px] mt-[208.52px] 2xl:mt-[208px] 3xl:mt-[250px] w-[100%]">
            <Text className="font-medium lg:leading-lh38 xl:leading-lh44 2xl:leading-lh50 leading-lh5000 3xl:leading-lh60 mx-[auto] text-center lg:text-fs27 xl:text-fs31 text-fs35 3xl:text-fs42 text-gray_900 w-[31%]">{`Trusted by Hundreds of Customers`}</Text>
            <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] not-italic text-bluegray_701 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[38%]">{`These are the stories of our customers who have joined us and used the Miner API for their data collection needs!`}</Text>
            <Row className="items-start justify-end lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] w-[100%]">
              <Column className="items-start justify-start lg:mb-[17px] xl:mb-[20px] mb-[22.5px] 2xl:mb-[22px] 3xl:mb-[27px] lg:ml-[116px] xl:ml-[133px] ml-[150px] 3xl:ml-[180px] w-[28%]">
                <Column className="w-[100%]">
                  <Stack className="lg:h-[234px] xl:h-[268px] h-[300.81px] 2xl:h-[302px] 3xl:h-[362px] w-[100%]">
                    <div className="absolute backdrop-opacity-[0.06] bg-gray_901 blur-[114.00px] lg:h-[234px] xl:h-[268px] h-[300.81px] 2xl:h-[302px] 3xl:h-[362px] inset-x-[10%] inset-y-[0] rounded-radius10 w-[80%]"></div>
                    <Column className="absolute bg-white_A700 border-2 border-indigo_A700 border-solid lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius10 top-[0] w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[46%]">
                          <Image
                            src="img_ellipse175.png"
                            className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius501 w-[50px]"
                            alt="Ellipse175"
                          />
                          <Column className="items-start lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] w-[62%]">
                            <Column className="w-[100%]">
                              <Text className="font-medium mx-[auto] text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900">{`Viezh Robert`}</Text>
                            </Column>
                            <Text className="font-normal ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_700 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16">{`Warsaw, Poland`}</Text>
                          </Column>
                        </Row>
                        <Text className="font-normal lg:mb-[12px] xl:mb-[14px] mb-[16.65px] 2xl:mb-[16px] 3xl:mb-[19px] ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[13px] xl:mt-[15px] mt-[17.35px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left">{`4.5`}</Text>
                        <Image
                          src="img_group1161.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[13px] xl:mb-[15px] mb-[17.35px] 2xl:mb-[17px] 3xl:mb-[20px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[23px] xl:mr-[26px] mr-[30px] 3xl:mr-[36px] lg:mt-[12px] xl:mt-[14px] mt-[16.65px] 2xl:mt-[16px] 3xl:mt-[19px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="Group1161"
                        />
                      </Row>
                      <Column className="items-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mx-[23px] xl:mx-[26px] mx-[30px] 3xl:mx-[36px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left w-[85%]">{`“Wow... I am very happy to use this API As a product manager, I was able to easily sort and export the data I needed.”.`}</Text>
                      </Column>
                    </Column>
                  </Stack>
                </Column>
                <Image
                  src="img_group1300.svg"
                  className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[10px] mt-[11.69px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] object-contain w-[34%]"
                  alt="Group1300"
                />
              </Column>
              <Column className="lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[58%]">
                <List
                  className="lg:gap-[38px] xl:gap-[44px] gap-[50px] 3xl:gap-[60px] grid grid-cols-2 min-h-[auto] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="border-2 border-gray_301 border-solid rounded-radius10 w-[100%]">
                    <Row className="items-center justify-between lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]">
                      <Row className="items-center justify-start lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[53%]">
                        <Image
                          src="img_ellipse175_1.png"
                          className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius501 w-[50px]"
                          alt="Ellipse175"
                        />
                        <Column className="items-start lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] w-[67%]">
                          <Text className="font-medium lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left">{`Yessica Christy`}</Text>
                          <Text className="font-normal ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_700 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Shanxi, China`}</Text>
                        </Column>
                      </Row>
                      <Row className="items-start justify-center lg:mr-[23px] xl:mr-[26px] mr-[30px] 3xl:mr-[36px] lg:my-[12px] xl:my-[14px] my-[16.65px] 2xl:my-[16px] 3xl:my-[19px] w-[13%]">
                        <Text className="font-normal mt-[1px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left">{`4.5`}</Text>
                        <Image
                          src="img_group1161.svg"
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                          alt="Group1161"
                        />
                      </Row>
                    </Row>
                    <Column className="items-start lg:mb-[32px] xl:mb-[37px] mb-[42px] 3xl:mb-[50px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mx-[23px] xl:mx-[26px] mx-[30px] 3xl:mx-[36px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left w-[85%]">{`“Having the API be global allows me to edit my datasets on the go, very nice!”.`}</Text>
                    </Column>
                  </Column>
                  <Stack className="lg:h-[179px] xl:h-[205px] h-[230px] 2xl:h-[231px] 3xl:h-[277px] w-[100%]">
                    <div className="absolute border-2 border-gray_301 border-solid lg:h-[179px] xl:h-[205px] h-[230px] 2xl:h-[231px] 3xl:h-[277px] inset-[0] rounded-radius10 w-[100%]"></div>
                    <Column className="absolute inset-x-[0] mx-[auto] top-[13%] w-[85%]">
                      <Column className="w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Row className="items-center justify-between w-[62%]">
                            <Image
                              src="img_ellipse175_2.png"
                              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius501 w-[50px]"
                              alt="Ellipse175"
                            />
                            <Column className="items-start xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] w-[67%]">
                              <Text className="font-medium lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left">{`Kim Young Jou`}</Text>
                              <Text className="font-normal ml-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic text-bluegray_700 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left">{`Seoul, South Korea`}</Text>
                            </Column>
                          </Row>
                          <Row className="items-start justify-between lg:my-[12px] xl:my-[14px] my-[16.65px] 2xl:my-[16px] 3xl:my-[19px] w-[15%]">
                            <Text className="font-normal mt-[1px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left">{`4.5`}</Text>
                            <Image
                              src="img_group1161_1.svg"
                              className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                              alt="Group1161"
                            />
                          </Row>
                        </Row>
                      </Column>
                      <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left w-[100%]">{`“I purchased the premium plan and this has allowed my company to be more efficient in putting out our products.”.`}</Text>
                    </Column>
                  </Stack>
                </List>
                <Row className="lg:gap-[15px] xl:gap-[17px] gap-[20px] 3xl:gap-[24px] grid grid-cols-2 items-center justify-center lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] lg:pl-[427px] xl:pl-[489px] pl-[550px] 3xl:pl-[660px] lg:pr-[116px] xl:pr-[133px] pr-[150px] 3xl:pr-[180px] w-[100%]">
                  <Image
                    src="img_buttonnonactl.svg"
                    className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]"
                    alt="Buttonnonactl"
                  />
                  <Image
                    src="img_buttonactrigh.svg"
                    className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] object-contain lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]"
                    alt="Buttonactrigh"
                  />
                </Row>
              </Column>
            </Row>
          </Column>
        </Column>
        <Stack className="lg:h-[551px] xl:h-[630px] h-[707.8999px] 2xl:h-[709px] 3xl:h-[850px] mb-[1px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] mt-[93px] w-[100%]">
          <Stack className="absolute lg:h-[551px] xl:h-[630px] h-[707.9px] 2xl:h-[709px] 3xl:h-[850px] inset-[0] w-[100%]">
            <div className="absolute bg-gray_50 bottom-[0] lg:h-[438px] xl:h-[501px] h-[563.12px] 2xl:h-[564px] 3xl:h-[677px] w-[100%]"></div>
            <div className="absolute backdrop-opacity-[0.06] bg-gray_901 blur-[114.00px] lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] inset-x-[0] mx-[auto] rounded-radius10 top-[6%] w-[75%]"></div>
            <Row className="absolute bg-white_A700 inset-x-[0] items-center justify-between mx-[auto] rounded-radius10 top-[0] w-[79%]">
              <Column className="items-start lg:ml-[54px] xl:ml-[62px] ml-[70px] 3xl:ml-[84px] lg:my-[45px] xl:my-[52px] my-[58.5px] 2xl:my-[58px] 3xl:my-[70px] w-[36%]">
                <Text className="font-medium lg:leading-lh35 xl:leading-lh40 2xl:leading-lh45 leading-lh4500 3xl:leading-lh54 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs27 xl:text-fs31 text-fs35 3xl:text-fs42 text-gray_900 text-left w-[91%]">
                  <span className="text-gray_900 text-fs35 font-rubik text-left font-medium lg:text-fs27 xl:text-fs31 3xl:text-fs42">
                    <>{`Test `}</>
                  </span>
                  <span className="text-indigo_A700 text-fs35 font-rubik text-left font-medium lg:text-fs27 xl:text-fs31 3xl:text-fs42">
                    <>{`Miner`}</>
                  </span>
                  <span className="text-gray_900 text-fs35 font-rubik text-left font-medium lg:text-fs27 xl:text-fs31 3xl:text-fs42">
                    <>{` today!`}</>
                  </span>
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic text-bluegray_701 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Let's subscribe with us and find the fun.`}</Text>
              </Column>
              <Stack
                className="common-pointer 3xl:h-[103px] lg:h-[67px] xl:h-[76px] h-[85.29px] 2xl:h-[86px] lg:mb-[47px] xl:mb-[54px] mb-[61.21px] 2xl:mb-[61px] 3xl:mb-[73px] lg:mr-[54px] xl:mr-[62px] mr-[70px] 3xl:mr-[84px] 3xl:mt-[103px] lg:mt-[67px] xl:mt-[76px] mt-[86.5px] 2xl:mt-[86px] w-[22%]"
                onClick={handleNavigate1}
              >
                <div className="absolute backdrop-opacity-[0.5] bg-indigo_A700_59 blur-[54.00px] bottom-[0] lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] inset-x-[0] mx-[auto] rounded-radius10 w-[85%]"></div>
                <Button className="absolute bg-indigo_A700 border-bw font-bold lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[17px] xl:py-[19px] py-[22px] 3xl:py-[26px] rounded-radius10 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 top-[0] w-[100%]">{`Try a free demo today!`}</Button>
              </Stack>
            </Row>
          </Stack>
          <Row className="absolute bottom-[14%] inset-x-[0] items-start justify-start mx-[auto] w-[79%]">
            <Text className="font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 leading-lh3000 3xl:leading-lh36 lg:mb-[128px] xl:mb-[147px] mb-[165.31px] 2xl:mb-[165px] 3xl:mb-[198px] lg:mt-[41px] xl:mt-[47px] mt-[53.12px] 2xl:mt-[53px] 3xl:mt-[63px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[30%]">
              <span className="text-bluegray_700 text-fs16 font-rubik text-left font-medium lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{`Miner`}</>
              </span>
              <span className="text-bluegray_700 text-fs16 font-rubik text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{` is a data filtering API that creates a natural environment for anonymizing data.`}</>
              </span>
            </Text>
            <List
              className="xl:gap-[112px] gap-[126px] 3xl:gap-[151px] lg:gap-[98px] grid grid-cols-2 min-h-[auto] lg:ml-[178px] xl:ml-[204px] ml-[230px] 3xl:ml-[276px] w-[28%]"
              orientation="horizontal"
            >
              <Column className="items-start justify-start w-[100%]">
                <Text className="font-medium xl:mr-[2px] lg:mr-[2px] mr-[3px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left">{`Product`}</Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Download`}</Text>
                <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Pricing`}</Text>
                <Text className="font-normal mr-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Locations`}</Text>
                <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Server`}</Text>
                <Text className="font-normal mr-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Countries`}</Text>
                <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Blog`}</Text>
              </Column>
              <Column className="items-start justify-start w-[100%]">
                <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left">{`Engage`}</Text>
                <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Miner ?`}</Text>
                <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`FAQ`}</Text>
                <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Tutorials`}</Text>
                <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`About Us`}</Text>
                <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Privacy Policy`}</Text>
                <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Terms of Service`}</Text>
              </Column>
            </List>
            <Column className="items-start justify-start lg:mb-[124px] xl:mb-[142px] mb-[160px] 3xl:mb-[192px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] w-[11%]">
              <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left">{`Earn Money`}</Text>
              <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Affiliate`}</Text>
              <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_700 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Become Partner`}</Text>
            </Column>
          </Row>
        </Stack>
      </Column>
    </>
  );
};

export default LandingpagePage;
