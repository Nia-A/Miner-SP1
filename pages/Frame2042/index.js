import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Button } from "components/Button";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Input } from "components/Input";

const Frame2042Page = () => {
  return (
    <>
      <Column className="font-apercupro items-center justify-start mx-[auto] overflow-auto w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="bg-gray_51 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[100%]">
            <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
              <Row className="items-center justify-between xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] w-[14%]">
                <Button className="border-bw font-medium px-[0] xl:py-[1px] lg:py-[1px] py-[2.1999998px] 3xl:py-[2px] 2xl:py-[2px] rounded-radius12 text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 w-[37%]">{`Cross-channel`}</Button>
                <Button className="border-bw font-medium px-[0] xl:py-[1px] lg:py-[1px] py-[2.1999998px] 3xl:py-[2px] 2xl:py-[2px] rounded-radius12 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 text-gray_400 w-[4%]">{`/`}</Button>
                <Button className="border-bw font-medium px-[0] xl:py-[1px] lg:py-[1px] py-[2.1999998px] 3xl:py-[2px] 2xl:py-[2px] rounded-radius12 text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 w-[52%]">{`Last month overview`}</Button>
              </Row>
              <Image
                src="img_btnsset_2.svg"
                className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] object-contain rounded-radius32 w-[28px]"
                alt="btnsset"
              />
            </Row>
            <Stack className="absolute bg-gray_51 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-[0] w-[100%]">
              <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[98%]">
                <Row className="items-center justify-between xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] w-[14%]">
                  <Button className="border-bw font-medium px-[0] xl:py-[1px] lg:py-[1px] py-[2.1999998px] 3xl:py-[2px] 2xl:py-[2px] rounded-radius12 text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 w-[37%]">{`Cross-channel`}</Button>
                  <Button className="border-bw font-medium px-[0] xl:py-[1px] lg:py-[1px] py-[2.1999998px] 3xl:py-[2px] 2xl:py-[2px] rounded-radius12 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 text-gray_400 w-[4%]">{`/`}</Button>
                  <Button className="border-bw font-medium px-[0] xl:py-[1px] lg:py-[1px] py-[2.1999998px] 3xl:py-[2px] 2xl:py-[2px] rounded-radius12 text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 w-[52%]">{`Last month overview`}</Button>
                </Row>
                <Image
                  src="img_btnsset_2.svg"
                  className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] object-contain rounded-radius32 w-[28px]"
                  alt="btnsset"
                />
              </Row>
              <Row className="absolute bg-gray_51 inset-[0] items-center justify-between w-[100%]">
                <Row className="items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[11px] my-[12.5px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[9%]">
                  <Button className="border-bw font-alata font-normal not-italic px-[0] xl:py-[1px] lg:py-[1px] py-[2.1999998px] 3xl:py-[2px] 2xl:py-[2px] rounded-radius12 text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 w-[22%]">{`Miner`}</Button>
                  <Button className="border-bw font-apercupro font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] px-[0] xl:py-[1px] lg:py-[1px] py-[2.1999998px] 3xl:py-[2px] 2xl:py-[2px] rounded-radius12 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 text-gray_400 w-[5%]">{`/`}</Button>
                  <Button className="border-bw font-alata font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic px-[0] xl:py-[1px] lg:py-[1px] py-[2.1999998px] 3xl:py-[2px] 2xl:py-[2px] rounded-radius12 text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 w-[61%]">{`Company Name`}</Button>
                </Row>
                <Image
                  src="img_btnsset_2.svg"
                  className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] xl:mr-[10px] mr-[12px] 3xl:mr-[14px] lg:mr-[9px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain rounded-radius32 w-[28px]"
                  alt="btnsset"
                />
              </Row>
            </Stack>
          </Stack>
          <Stack className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] w-[100%]">
            <header className="absolute inset-[0] w-[100%]">
              <Row className="bg-gray_51 items-center justify-end w-[100%]">
                <Text className="font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Cross-channel analysis`}</Text>
                <Image
                  src="img_bar_8.svg"
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[5%]"
                  alt="bar"
                />
                <Image
                  src="img_bar_9.svg"
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[1041px] 3xl:ml-[1249px] lg:ml-[809px] xl:ml-[926px] xl:mr-[10px] mr-[12px] 3xl:mr-[14px] lg:mr-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[7%]"
                  alt="bar"
                />
              </Row>
            </header>
            <Row className="absolute bg-gray_51 font-alata inset-[0] items-center justify-end w-[100%]">
              <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`New Offer Campaign`}</Text>
              <Image
                src="img_bar_4.svg"
                className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[4%]"
                alt="bar"
              />
              <Image
                src="img_bar_9.svg"
                className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[1076px] 3xl:ml-[1291px] lg:ml-[836px] xl:ml-[957px] xl:mr-[10px] mr-[12px] 3xl:mr-[14px] lg:mr-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[7%]"
                alt="bar"
              />
            </Row>
          </Stack>
          <Stack className="font-alata lg:h-[607px] xl:h-[694px] h-[780px] 2xl:h-[781px] 3xl:h-[937px] w-[100%]">
            <Stack className="absolute bottom-[0] lg:h-[570px] xl:h-[652px] h-[732px] 2xl:h-[733px] 3xl:h-[879px] w-[100%]">
              <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:mb-[542px] xl:mb-[620px] mb-[697px] 3xl:mb-[836px] w-[15%]">
                  <div className="absolute bg-gray_51 lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] inset-[0] w-[100%]"></div>
                  <Column className="absolute inset-[0] w-[100%]">
                    <Column className="w-[100%]">
                      <Line className="h-[1px] w-[100%]" />
                    </Column>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_51 font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:pt-[1px] lg:pt-[1px] pt-[2px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                      name="Name"
                      placeholder={`Name`}
                    ></Input>
                  </Column>
                </Stack>
                <Line className="bg-bluegray_51 lg:h-[580px] xl:h-[663px] h-[745px] 2xl:h-[746px] 3xl:h-[895px] w-[1px]" />
                <Column className="bg-gray_51 font-apercupro items-start justify-start lg:mb-[542px] xl:mb-[620px] mb-[697px] 3xl:mb-[836px] w-[12%]">
                  <Column className="items-center w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                  <Input
                    className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-deep_purple_A200_14 font-bold lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:pt-[1px] lg:pt-[1px] pt-[2px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                    name="Time"
                    placeholder={`Time`}
                  ></Input>
                </Column>
                <Stack className="font-apercupro lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:mb-[542px] xl:mb-[620px] mb-[697px] 3xl:mb-[836px] w-[24%]">
                  <Column className="absolute bg-gray_51 items-center justify-start left-[0] w-[50%]">
                    <Line className="h-[1px] w-[100%]" />
                    <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                      <Input
                        className="absolute placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_51 bottom-[0] font-bold inset-x-[0] lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:pt-[1px] lg:pt-[1px] pt-[2px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                        name="Browser"
                        placeholder={`Browser`}
                      ></Input>
                      <Line className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] right-[0] w-[1px]" />
                    </Stack>
                  </Column>
                  <Column className="absolute bg-gray_51 items-center justify-start right-[0] w-[50%]">
                    <Line className="h-[1px] w-[100%]" />
                    <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                      <Input
                        className="absolute placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_51 bottom-[0] font-bold lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:pt-[1px] lg:pt-[1px] pt-[2px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                        name="City"
                        placeholder={`City`}
                      ></Input>
                      <Line className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] right-[0] w-[1px]" />
                    </Stack>
                  </Column>
                </Stack>
                <Stack className="font-apercupro lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:mb-[542px] xl:mb-[620px] mb-[697px] 3xl:mb-[836px] w-[24%]">
                  <Column className="absolute bg-gray_51 items-center justify-start left-[0] w-[50%]">
                    <Line className="h-[1px] w-[100%]" />
                    <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                      <Input
                        className="absolute placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_51 bottom-[0] font-bold lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:pt-[1px] lg:pt-[1px] pt-[2px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                        name="Country"
                        placeholder={`Country`}
                      ></Input>
                      <Line className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] right-[0] w-[1px]" />
                    </Stack>
                  </Column>
                  <Column className="absolute bg-gray_51 font-alata items-center justify-start right-[0] w-[50%]">
                    <Line className="h-[1px] w-[100%]" />
                    <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                      <Input
                        className="absolute placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_51 bottom-[0] font-normal not-italic lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:pt-[1px] lg:pt-[1px] pt-[2px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                        name="Personalized To"
                        placeholder={`Personalized Token`}
                      ></Input>
                      <Line className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] right-[0] w-[1px]" />
                    </Stack>
                  </Column>
                </Stack>
                <Stack className="font-apercupro lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:mb-[542px] xl:mb-[620px] mb-[697px] 3xl:mb-[836px] w-[24%]">
                  <Column className="absolute bg-gray_51 items-center justify-start left-[0] w-[50%]">
                    <Line className="h-[1px] w-[100%]" />
                    <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                      <Input
                        className="absolute placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_51 bottom-[0] font-bold lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:pt-[1px] lg:pt-[1px] pt-[2px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                        name="Reffering domai"
                        placeholder={`Reffering domain`}
                      ></Input>
                      <Line className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] right-[0] w-[1px]" />
                    </Stack>
                  </Column>
                  <Column className="absolute bg-gray_51 font-alata items-start justify-start right-[0] w-[50%]">
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] w-[100%]" />
                    </Column>
                    <Input
                      className="placeholder:bg-transparent bg-transparent border-0 border-b-[1px] border-bluegray_51 font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:pt-[1px] lg:pt-[1px] pt-[2px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                      name="Offer"
                      placeholder={`Offer`}
                    ></Input>
                  </Column>
                </Stack>
              </Row>
              <Column className="absolute bottom-[0] w-[100%]">
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Bob Jack"
                          placeholder={`Bob Jack`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="4 min ago"
                            placeholder={`4 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Sophie Hubbard"
                          placeholder={`Sophie Hubbard`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="5 min ago"
                            placeholder={`5 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Safari"
                            placeholder={`Safari`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Colombo"
                          placeholder={`Colombo`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Kingston Saunde"
                          placeholder={`Kingston Saunders`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="11 min ago"
                            placeholder={`11 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Chester Small"
                          placeholder={`Chester Small`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="17 min ago"
                            placeholder={`17 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Johnny Smart"
                          placeholder={`Johnny Smart`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="21 min ago"
                            placeholder={`21 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Safari"
                            placeholder={`Safari`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Colombo"
                          placeholder={`Colombo`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Madina Acevedo"
                          placeholder={`Madina Acevedo`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="23 min ago"
                            placeholder={`23 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Akshay Benton"
                          placeholder={`Akshay Benton`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="26 min ago"
                            placeholder={`26 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Geraldine Abbot"
                          placeholder={`Geraldine Abbott`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="31 min ago"
                            placeholder={`31 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Alishia Schwatr"
                          placeholder={`Alishia Schwatrz`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="32 min ago"
                            placeholder={`32 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Safari"
                            placeholder={`Safari`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Ephraim Higgs"
                          placeholder={`Ephraim Higgs`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="44 min ago"
                            placeholder={`44 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Adem Hutchings"
                          placeholder={`Adem Hutchings`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="46 min ago"
                            placeholder={`46 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Raisa Rodriguez"
                          placeholder={`Raisa Rodriguez`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="48 min ago"
                            placeholder={`48 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Mandy Southern"
                          placeholder={`Mandy Southern`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="56 min ago"
                            placeholder={`56 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Colombo"
                          placeholder={`Colombo`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Lucas Sweet"
                          placeholder={`Lucas Sweet`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="56 min ago"
                            placeholder={`56 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Terry Alford"
                          placeholder={`Terry Alford`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="58 min ago"
                            placeholder={`58 min ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Elysha Sparrow"
                          placeholder={`Elysha Sparrow`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="1 h agp"
                            placeholder={`1 h agp`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Grace Norris"
                          placeholder={`Grace Norris`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="1 h ago"
                            placeholder={`1 h ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Sofia Almond"
                          placeholder={`Sofia Almond`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 items-center justify-evenly left-[0] w-[24%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="1 h ago"
                            placeholder={`1 h ago`}
                          ></Input>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Chrome"
                            placeholder={`Chrome`}
                          ></Input>
                        </Row>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[24%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[36%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[28%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[28%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[16%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                      <Line className="h-[1px] lg:mx-[308px] xl:mx-[353px] mx-[397.25px] 2xl:mx-[397px] 3xl:mx-[476px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-end w-[100%]">
                  <Column className="font-alata items-start w-[16%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[14px] xl:pl-[16px] pl-[19px] 3xl:pl-[22px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_900 text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[77%]"
                          name="Zishan Newman"
                          placeholder={`Zishan Newman`}
                        ></Input>
                        <Image
                          src="img_tableblock_6.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                      </Row>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[78%]" />
                  </Column>
                  <Input
                    className="bg-gray_51 placeholder:bg-transparent border-0 font-apercupro font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                    name="1 h ago"
                    placeholder={`1 h ago`}
                  ></Input>
                  <Column className="font-apercupro items-start w-[100%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Chrome"
                          placeholder={`Chrome`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[12%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal left-[12%] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="Unawatuna"
                          placeholder={`Unawatuna`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[24%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-medium left-[24%] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[12%]"
                          name="Sri Lanka"
                          placeholder={`Sri Lanka`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[1px]" />
                        <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[36%] w-[12%]"></div>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] text-deep_purple_A200 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1C5CHFA_enUA719UA720&sxsrf=AOaemvIPq0rkJfyhALQwbEpRpe1q4li36A:1631556383801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvo7-VxfzyAhXJhv0HHc2HBMgQ_AUoAXoECAEQAw&biw=1600&bih=856#imgrc=vtVc_3WVGEKO_M`}</Text>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[48%] right-[52%] w-[1px]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[40%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[12%]"
                          name="is.stimepagedem"
                          placeholder={`is.stimepagedemo.com`}
                        ></Input>
                        <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[40%] w-[1px]" />
                        <Column className="absolute items-start justify-start right-[28%] w-[12%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,718.56"
                            placeholder={`$1,718.56`}
                          ></Input>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[135px] xl:mx-[154px] mx-[173.75px] 2xl:mx-[173px] 3xl:mx-[208px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[270px] xl:mx-[309px] mx-[347.5px] 2xl:mx-[347px] 3xl:mx-[417px] w-[12%]" />
                    <Line className="h-[1px] lg:mx-[405px] xl:mx-[463px] mx-[521.25px] 2xl:mx-[521px] 3xl:mx-[625px] w-[12%]" />
                    <Column className="items-end w-[100%]">
                      <Line className="h-[1px] lg:mx-[444px] xl:mx-[507px] mx-[571px] 3xl:mx-[685px] w-[12%]" />
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Image
                src="img_scrollbarscol_1.svg"
                className="absolute lg:h-[475px] xl:h-[543px] h-[610px] 2xl:h-[611px] 3xl:h-[733px] inset-y-[0] my-[auto] object-contain right-[0] w-[1%]"
                alt="scrollbarscol"
              />
            </Stack>
            <Row className="absolute bg-gray_51 font-apercupro inset-x-[0] items-center justify-start top-[0] w-[100%]">
              <Image
                src="img_icon24filter.svg"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[14px] xl:my-[16px] my-[19px] 3xl:my-[22px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="icon24filter"
              />
              <Row className="items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[1021px] xl:mr-[1168px] mr-[1313px] 3xl:mr-[1576px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] rounded-radius8 w-[5%]">
                <Image
                  src="img_icon24plus.svg"
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="icon24plus"
                />
                <Text className="font-medium xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left">{`Filter`}</Text>
              </Row>
            </Row>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default Frame2042Page;
