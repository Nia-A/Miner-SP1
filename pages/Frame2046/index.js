import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { List } from "components/List";
import { Line } from "components/Line";
import { Input } from "components/Input";

const Frame2046Page = () => {
  return (
    <>
      <Column className="bg-gray_51 mx-[auto] w-[100%]">
        <Column className="items-start justify-end lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] w-[100%]">
          <Column className="font-alata items-center w-[100%]">
            <Row className="bg-gray_51 items-center justify-between w-[100%]">
              <Row className="items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[11px] my-[12.5px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[9%]">
                <Text className="font-alata font-normal not-italic text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9">{`Miner`}</Text>
                <Text className="font-apercupro font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 text-gray_400">{`/`}</Text>
                <Text className="font-alata font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9">{`Company Name`}</Text>
              </Row>
              <Image
                src="img_btnsset_2.svg"
                className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] xl:mr-[10px] mr-[12px] 3xl:mr-[14px] lg:mr-[9px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain rounded-radius32 w-[28px]"
                alt="btnsset"
              />
            </Row>
            <header className="w-[100%]">
              <Stack className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] w-[100%]">
                <Stack className="absolute lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] inset-[0] overflow-auto w-[100%]">
                  <div className="absolute bg-gray_51 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] inset-[0] w-[100%]"></div>
                  <Row className="absolute bg-gray_51 inset-[0] items-center justify-end w-[100%]">
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Campaign Analysis`}</Text>
                    <Image
                      src="img_bar_4.svg"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[4%]"
                      alt="bar"
                    />
                    <Image
                      src="img_bar_9.svg"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[1087px] 3xl:ml-[1305px] lg:ml-[845px] xl:ml-[966px] xl:mr-[10px] mr-[12px] 3xl:mr-[14px] lg:mr-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[7%]"
                      alt="bar"
                    />
                  </Row>
                </Stack>
                <Row className="absolute font-apercupro h-[max-content] inset-[0] items-center justify-center m-[auto] w-[98%]">
                  <Text className="font-medium lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Cross-channel analysis`}</Text>
                  <Image
                    src="img_bar_6.svg"
                    className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain w-[5%]"
                    alt="bar"
                  />
                  <Image
                    src="img_bar_10.svg"
                    className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[1071px] 3xl:ml-[1285px] lg:ml-[833px] xl:ml-[952px] object-contain w-[7%]"
                    alt="bar"
                  />
                </Row>
              </Stack>
            </header>
          </Column>
          <Row className="font-alata items-center justify-start lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[14%]">
            <Image
              src="img_icon24filter.svg"
              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
              alt="icon24filter"
            />
            <Row className="bg-orange_50 items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] my-[1px] rounded-radius28 w-[39%]">
              <Text className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] not-italic text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$700`}</Text>
              <Image
                src="img_icon24cross_1.svg"
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[3px] lg:ml-[3px] ml-[4px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                alt="icon24cross"
              />
            </Row>
            <Row className="font-apercupro items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] rounded-radius8 w-[43%]">
              <Image
                src="img_icon24plus.svg"
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="icon24plus"
              />
              <Text className="font-medium xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left">{`Filter`}</Text>
            </Row>
          </Row>
          <Text className="bg-gray_51 font-apercupro font-medium leading-lh14000 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] text-bluegray_201 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">
            <span className="text-bluegray_201 text-fs12 font-alata text-center font-normal lg:text-fs9 xl:text-fs10 3xl:text-fs14">
              <>{`Showing `}</>
            </span>
            <span className="text-bluegray_702 text-fs12 font-alata text-center font-normal lg:text-fs9 xl:text-fs10 3xl:text-fs14">
              <>{`135`}</>
            </span>
            <span className="text-bluegray_201 text-fs12 font-alata text-center font-normal lg:text-fs9 xl:text-fs10 3xl:text-fs14">
              <>{` from `}</>
            </span>
            <span className="text-bluegray_702 text-fs12 font-alata text-center font-normal lg:text-fs9 xl:text-fs10 3xl:text-fs14">
              <>{`893`}</>
            </span>
            <span className="text-bluegray_201 text-fs12 font-alata text-center font-normal lg:text-fs9 xl:text-fs10 3xl:text-fs14">
              <>{` results`}</>
            </span>
          </Text>
          <Column className="font-apercupro xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[100%]">
            <Row className="items-start justify-end overflow-auto w-[100%]">
              <Stack className="lg:h-[514px] xl:h-[588px] h-[660px] 2xl:h-[661px] 3xl:h-[793px] lg:mb-[56px] xl:mb-[64px] mb-[72px] 3xl:mb-[86px] w-[61%]">
                <Row className="absolute inset-[0] items-center justify-evenly w-[100%]">
                  <Column className="w-[55%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <List
                        className="gap-[0] grid grid-cols-2 min-h-[auto] w-[60%]"
                        orientation="horizontal"
                      >
                        <Column className="bg-gray_51 w-[100%]">
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                          <Column className="items-end lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[100%]">
                            <Text className="font-bold lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Header`}</Text>
                          </Column>
                          <Column className="lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 items-start justify-start w-[100%]">
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                          <Text className="font-bold lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Name`}</Text>
                          <Column className="lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </List>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold left-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="Spend"
                              placeholder={`Spend`}
                            ></Input>
                            <Line className="absolute h-[1px] left-[0] top-[0] w-[50%]" />
                            <Column className="absolute right-[0] w-[50%]">
                              <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-y-[0] left-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="Clicks"
                                  placeholder={`Clicks`}
                                ></Input>
                                <Line className="absolute h-[1px] top-[0] w-[100%]" />
                                <Line className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group956"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[63%]">
                          <Image
                            src="img_icon24campaig_38.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,718.56"
                              placeholder={`$1,718.56`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="12345"
                                  placeholder={`12345`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-deep_purple_A200_f5 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group957"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-deep_purple_A200_f5 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[52%]">
                          <Image
                            src="img_icon24campaig_39.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`new_offer_8735`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-deep_purple_A200_f5 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,571.63"
                              placeholder={`$1,571.63`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-deep_purple_A200_f5 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[99%]"
                                  name="12345"
                                  placeholder={`12345`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group958"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[44%]">
                          <Image
                            src="img_icon24campaig_40.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`spring_2020`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$956.54"
                              placeholder={`$956.54`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="12345"
                                  placeholder={`12345`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group959"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[73%]">
                          <Image
                            src="img_icon24campaig_41.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`UK_brand_DT_campaign`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,133.69"
                              placeholder={`$1,133.69`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="677"
                                  placeholder={`677`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group960"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[58%]">
                          <Image
                            src="img_icon24campaig_42.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`AU-DT-offer-2394`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,672.93"
                              placeholder={`$1,672.93`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="248"
                                  placeholder={`248`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group961"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[55%]">
                          <Image
                            src="img_icon24campaig_43.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`GR-DT-brand-12`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$704.13"
                              placeholder={`$704.13`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="2,300"
                                  placeholder={`2,300`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group962"
                        >
                          <div className="w-full h-full absolute bg-green_A200 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[56%]">
                          <Image
                            src="img_icon24campaig_44.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Second-offer-EU`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[25px] xl:pl-[29px] pl-[33px] 3xl:pl-[39px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,694.09"
                              placeholder={`$1,694.09`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="145"
                                  placeholder={`145`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[14%]"
                        alt="tableblock"
                      />
                      <Column className="bg-gray_51 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[72%]">
                          <Image
                            src="img_icon24campaig_45.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Follow-Fav-Teams-2020`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,501.84"
                              placeholder={`$1,501.84`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="805"
                                  placeholder={`805`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group963"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[73%]">
                          <Image
                            src="img_icon24campaig_46.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Resubscription-offer-20`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,542.24"
                              placeholder={`$1,542.24`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="1,076"
                                  placeholder={`1,076`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group964"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 w-[46%]">
                        <Column className="items-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]">
                          <Row className="items-center justify-start lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[77%]">
                            <Image
                              src="img_icon24campaig_47.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-main`}</Text>
                          </Row>
                        </Column>
                        <Line className="h-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]" />
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,568.37"
                              placeholder={`$1,568.37`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="2,001"
                                  placeholder={`2,001`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group965"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 items-center w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] mx-[auto] w-[82%]">
                          <Image
                            src="img_icon24campaig_48.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Dave-Portnoy-campaign-20`}</Text>
                        </Row>
                        <Line className="h-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]" />
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,493.87"
                              placeholder={`$1,493.87`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="1,706"
                                  placeholder={`1,706`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group966"
                        >
                          <div className="w-full h-full absolute bg-gray_302 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-bluegray_400"
                            style={{ width: "21%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[74%]">
                          <Image
                            src="img_icon24campaig_49.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Sport-aud-second-offer`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$704.83"
                              placeholder={`$704.83`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="1,007"
                                  placeholder={`1,007`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group967"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[57%]">
                          <Image
                            src="img_icon24campaig_50.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`IT-DT-brand-19-2`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[25px] xl:pl-[29px] pl-[33px] 3xl:pl-[39px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,054.87"
                              placeholder={`$1,054.87`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="1,885"
                                  placeholder={`1,885`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group968"
                        >
                          <div className="w-full h-full absolute bg-gray_302 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-bluegray_400"
                            style={{ width: "21%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[75%]">
                          <Image
                            src="img_icon24campaig_51.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-test`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$856.53"
                              placeholder={`$856.53`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="1,461"
                                  placeholder={`1,461`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group969"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 items-start w-[46%]">
                        <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[73%]">
                          <Image
                            src="img_icon24campaig_52.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Resubscription-offer-20`}</Text>
                        </Row>
                        <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,542.24"
                              placeholder={`$1,542.24`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="1,076"
                                  placeholder={`1,076`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group970"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Column className="bg-gray_51 w-[46%]">
                        <Column className="items-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]">
                          <Row className="items-center justify-start lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[77%]">
                            <Image
                              src="img_icon24campaig_53.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-main`}</Text>
                          </Row>
                        </Column>
                        <Line className="h-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]" />
                      </Column>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                              name="$1,568.37"
                              placeholder={`$1,568.37`}
                            ></Input>
                            <Column className="w-[50%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                  name="2,001"
                                  placeholder={`2,001`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                      </Column>
                    </Row>
                    <Column className="items-center justify-end w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_51 items-center w-[14%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group971"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-center w-[46%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] mx-[auto] w-[82%]">
                            <Image
                              src="img_icon24campaig_54.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Dave-Portnoy-campaign-20`}</Text>
                          </Row>
                          <Line className="h-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]" />
                        </Column>
                        <Column className="items-start w-[40%]">
                          <Column className="w-[100%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,493.87"
                                placeholder={`$1,493.87`}
                              ></Input>
                              <Column className="w-[50%]">
                                <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                  <Input
                                    className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[99%]"
                                    name="1,706"
                                    placeholder={`1,706`}
                                  ></Input>
                                  <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                                </Stack>
                                <Line className="h-[1px] w-[100%]" />
                              </Column>
                            </Row>
                          </Column>
                          <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                        </Column>
                      </Row>
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="bg-gray_51 items-center w-[14%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group972"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[46%]">
                          <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]">
                            <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]"></div>
                            <Line className="absolute bottom-[0] h-[1px] w-[100%]" />
                          </Stack>
                          <Row className="absolute h-[max-content] inset-y-[0] items-center justify-start left-[9%] my-[auto] w-[77%]">
                            <Image
                              src="img_icon24campaig_55.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-main`}</Text>
                          </Row>
                        </Stack>
                        <Column className="items-start w-[40%]">
                          <Column className="w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                              <Row className="absolute gap-[0] grid grid-cols-2 inset-[0] items-center justify-evenly w-[100%]">
                                <Input
                                  className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$1,568.37"
                                  placeholder={`$1,568.37`}
                                ></Input>
                                <Input
                                  className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="2,001"
                                  placeholder={`2,001`}
                                ></Input>
                              </Row>
                              <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                            </Stack>
                          </Column>
                          <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                          <Column className="items-end w-[100%]">
                            <Line className="h-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[50%]" />
                          </Column>
                        </Column>
                      </Row>
                    </Column>
                    <Row className="items-center justify-evenly lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]">
                      <Column className="bg-gray_51 items-center w-[14%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group973"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[46%]">
                        <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]">
                          <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]"></div>
                          <Line className="absolute bottom-[0] h-[1px] w-[100%]" />
                        </Stack>
                        <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[82%]">
                          <Image
                            src="img_icon24campaig_56.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Dave-Portnoy-campaign-20`}</Text>
                        </Row>
                      </Stack>
                      <Column className="items-start w-[40%]">
                        <Column className="w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute gap-[0] grid grid-cols-2 inset-[0] items-center justify-evenly w-[100%]">
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$1,493.87"
                                placeholder={`$1,493.87`}
                              ></Input>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="1,706"
                                placeholder={`1,706`}
                              ></Input>
                            </Row>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[50%]" />
                        <Column className="items-end w-[100%]">
                          <Line className="h-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[50%]" />
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="w-[45%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_1.svg"
                        className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold left-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                              name="Metric 1"
                              placeholder={`Metric 1`}
                            ></Input>
                            <Line className="absolute h-[1px] left-[0] top-[0] w-[33%]" />
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-x-[33%] inset-y-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                              name="Metric 2"
                              placeholder={`Metric 2`}
                            ></Input>
                            <Line className="absolute h-[1px] inset-x-[0] mx-[auto] top-[0] w-[33%]" />
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="Metric 3"
                                  placeholder={`Metric 3`}
                                ></Input>
                                <Line className="absolute h-[1px] top-[0] w-[100%]" />
                                <Line className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$1,049.14"
                                placeholder={`$1,049.14`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$110.20"
                                  placeholder={`$110.20`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_7.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-deep_purple_A200_f5 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                              <Input
                                className="bg-deep_purple_A200_f5 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$1,049.14"
                                placeholder={`$1,049.14`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-deep_purple_A200_f5 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$115.50"
                                  placeholder={`$115.50`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$1,049.14"
                                placeholder={`$1,049.14`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$156.96"
                                  placeholder={`$156.96`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`73`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$194.49"
                                placeholder={`$194.49`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$69.46"
                                  placeholder={`$69.46`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`15`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_400 text-bluegray_400 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[100%]"
                                name="$190.65"
                                placeholder={`$190.65`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$247.49"
                                  placeholder={`$247.49`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$104.94"
                                placeholder={`$104.94`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$177.04"
                                  placeholder={`$177.04`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`42`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$115.33"
                                placeholder={`$115.33`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$195.97"
                                  placeholder={`$195.97`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`11`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$214.19"
                                placeholder={`$214.19`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$226.38"
                                  placeholder={`$226.38`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`8`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$91.24"
                                placeholder={`$91.24`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$113.12"
                                  placeholder={`$113.12`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`21`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$79.51"
                                placeholder={`$79.51`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$110.56"
                                  placeholder={`$110.56`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`37`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$118.74"
                                placeholder={`$118.74`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$75.39"
                                  placeholder={`$75.39`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`18`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$184.69"
                                placeholder={`$184.69`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$227.06"
                                  placeholder={`$227.06`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`15`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$157.01"
                                placeholder={`$157.01`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$213.91"
                                  placeholder={`$213.91`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`6`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$164.17"
                                placeholder={`$164.17`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$112.58"
                                  placeholder={`$112.58`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`14`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$184.69"
                                placeholder={`$184.69`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$227.06"
                                  placeholder={`$227.06`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[78%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`19`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$157.01"
                                placeholder={`$157.01`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$213.91"
                                  placeholder={`$213.91`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Column className="items-center justify-end w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Image
                          src="img_tableblock_5.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                        <Column className="items-start w-[78%]">
                          <Column className="items-center w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                              <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                                <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`17`}</Text>
                                <Input
                                  className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$164.17"
                                  placeholder={`$164.17`}
                                ></Input>
                              </Row>
                              <Column className="absolute right-[0] w-[33%]">
                                <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                  <Input
                                    className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                    name="$112.58"
                                    placeholder={`$112.58`}
                                  ></Input>
                                  <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                                </Stack>
                                <Line className="h-[1px] w-[100%]" />
                              </Column>
                            </Stack>
                          </Column>
                          <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                          <Column className="items-center w-[100%]">
                            <Line className="h-[1px] mx-[auto] w-[33%]" />
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-center justify-evenly w-[100%]">
                        <Image
                          src="img_tableblock_5.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                          alt="tableblock"
                        />
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[78%]">
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Column className="items-center w-[100%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                                  <div className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]"></div>
                                  <Input
                                    className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                    name="$157.01"
                                    placeholder={`$157.01`}
                                  ></Input>
                                </Row>
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                                  name="$213.91"
                                  placeholder={`$213.91`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                            </Column>
                            <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                            <Column className="items-center w-[100%]">
                              <Line className="h-[1px] mx-[auto] w-[33%]" />
                            </Column>
                            <Column className="items-end w-[100%]">
                              <Line className="h-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[33%]" />
                            </Column>
                          </Column>
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[7%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`19`}</Text>
                        </Stack>
                      </Row>
                    </Column>
                    <Row className="items-center justify-evenly lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]">
                      <Image
                        src="img_tableblock_5.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                        alt="tableblock"
                      />
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[78%]">
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                              <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                                <div className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]"></div>
                                <Input
                                  className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$164.17"
                                  placeholder={`$164.17`}
                                ></Input>
                              </Row>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                                name="$112.58"
                                placeholder={`$112.58`}
                              ></Input>
                              <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                            </Stack>
                          </Column>
                          <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                          <Column className="items-center w-[100%]">
                            <Line className="h-[1px] mx-[auto] w-[33%]" />
                          </Column>
                          <Column className="items-end w-[100%]">
                            <Line className="h-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[33%]" />
                          </Column>
                        </Column>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[7%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`17`}</Text>
                      </Stack>
                    </Row>
                  </Column>
                </Row>
                <Stack className="absolute bg-deep_purple_A200_14 font-alata xl:h-[103px] h-[115px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[90px] right-[30%] top-[20%] w-[16%]">
                  <Image
                    src="img_cardbody_1.svg"
                    className="absolute xl:h-[103px] h-[115px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[90px] inset-[0] object-cover rounded-radius8 w-[100%]"
                    alt="cardbody"
                  />
                  <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[92%]">
                    <Input
                      className="bg-deep_purple_A200_14 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] py-[9.5px] 2xl:py-[9px] rounded-radius6 placeholder:text-deep_purple_A200 text-deep_purple_A200 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[100%]"
                      name="View collection"
                      placeholder={`View collection`}
                    ></Input>
                    <Text className="font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius6 text-bluegray_702 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[100%]">{`Save collection`}</Text>
                    <Text className="font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius6 text-bluegray_702 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[100%]">{`Export collection`}</Text>
                  </Column>
                </Stack>
              </Stack>
              <Column className="lg:mb-[56px] xl:mb-[64px] mb-[72px] 3xl:mb-[86px] w-[27%]">
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_1.svg"
                    className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold left-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                          name="Metric 5"
                          placeholder={`Metric 5`}
                        ></Input>
                        <Line className="absolute h-[1px] left-[0] top-[0] w-[33%]" />
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-x-[33%] inset-y-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                          name="Metric 6"
                          placeholder={`Metric 6`}
                        ></Input>
                        <Line className="absolute h-[1px] inset-x-[0] mx-[auto] top-[0] w-[33%]" />
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="Metric 7"
                              placeholder={`Metric 7`}
                            ></Input>
                            <Line className="absolute h-[1px] top-[0] w-[100%]" />
                            <Line className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`3`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,355.01"
                            placeholder={`$1,355.01`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$652.08"
                              placeholder={`$652.08`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_8.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-deep_purple_A200_f5 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`8`}</Text>
                          <Input
                            className="bg-deep_purple_A200_f5 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,109.25"
                            placeholder={`$1,109.25`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-deep_purple_A200_f5 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$434.21"
                              placeholder={`$434.21`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`9`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,008.71"
                            placeholder={`$1,008.71`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$180.37"
                              placeholder={`$180.37`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`11`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$898.23"
                            placeholder={`$898.23`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$638.98"
                              placeholder={`$638.98`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`4`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,580.82"
                            placeholder={`$1,580.82`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$949.96"
                              placeholder={`$949.96`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`6`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$886.22"
                            placeholder={`$886.22`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$68.49"
                              placeholder={`$68.49`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`16`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,653.48"
                            placeholder={`$1,653.48`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$105.08"
                              placeholder={`$105.08`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`11`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$956.13"
                            placeholder={`$956.13`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$77.12"
                              placeholder={`$77.12`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`9`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,547.62"
                            placeholder={`$1,547.62`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$132.12"
                              placeholder={`$132.12`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`14`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,741.22"
                            placeholder={`$1,741.22`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$119.71"
                              placeholder={`$119.71`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`8`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,604.28"
                            placeholder={`$1,604.28`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$102.95"
                              placeholder={`$102.95`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`2`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,252.59"
                            placeholder={`$1,252.59`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$71.62"
                              placeholder={`$71.62`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`7`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,150.07"
                            placeholder={`$1,150.07`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$125.53"
                              placeholder={`$125.53`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`19`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,049.14"
                            placeholder={`$1,049.14`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$132.95"
                              placeholder={`$132.95`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,252.59"
                            placeholder={`$1,252.59`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$71.62"
                              placeholder={`$71.62`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="items-center w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`11`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,150.07"
                            placeholder={`$1,150.07`}
                          ></Input>
                        </Row>
                        <Column className="absolute right-[0] w-[33%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$125.53"
                              placeholder={`$125.53`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center justify-end w-[100%]">
                  <Row className="items-center justify-evenly w-[100%]">
                    <Image
                      src="img_tableblock_5.svg"
                      className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                      alt="tableblock"
                    />
                    <Column className="items-start w-[78%]">
                      <Column className="items-center w-[100%]">
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                          <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                            <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`2`}</Text>
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$1,049.14"
                              placeholder={`$1,049.14`}
                            ></Input>
                          </Row>
                          <Column className="absolute right-[0] w-[33%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_400 text-bluegray_400 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$132.95"
                                placeholder={`$132.95`}
                              ></Input>
                              <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                            </Stack>
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Stack>
                      </Column>
                      <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                      <Column className="items-center w-[100%]">
                        <Line className="h-[1px] mx-[auto] w-[33%]" />
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-evenly w-[100%]">
                    <Image
                      src="img_tableblock_5.svg"
                      className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                      alt="tableblock"
                    />
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[78%]">
                      <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <div className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]"></div>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$1,150.07"
                                placeholder={`$1,150.07`}
                              ></Input>
                            </Row>
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                              name="$125.53"
                              placeholder={`$125.53`}
                            ></Input>
                            <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                          </Stack>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                        <Column className="items-end w-[100%]">
                          <Line className="h-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[33%]" />
                        </Column>
                      </Column>
                      <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[7%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`11`}</Text>
                    </Stack>
                  </Row>
                </Column>
                <Row className="items-center justify-evenly lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[78%]">
                    <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                      <Column className="items-center w-[100%]">
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                          <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                            <div className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]"></div>
                            <Input
                              className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                              name="$1,049.14"
                              placeholder={`$1,049.14`}
                            ></Input>
                          </Row>
                          <Input
                            className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                            name="$132.95"
                            placeholder={`$132.95`}
                          ></Input>
                          <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                        </Stack>
                      </Column>
                      <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                      <Column className="items-center w-[100%]">
                        <Line className="h-[1px] mx-[auto] w-[33%]" />
                      </Column>
                      <Column className="items-end w-[100%]">
                        <Line className="h-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[33%]" />
                      </Column>
                    </Column>
                    <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[7%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`2`}</Text>
                  </Stack>
                </Row>
              </Column>
              <Stack className="lg:h-[570px] xl:h-[652px] h-[732px] 2xl:h-[733px] 3xl:h-[879px] w-[100%]">
                <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[486px] xl:h-[556px] h-[624px] 2xl:h-[625px] 3xl:h-[750px] w-[100%]">
                      <Stack className="absolute lg:h-[486px] xl:h-[556px] h-[624px] 2xl:h-[625px] 3xl:h-[750px] inset-[0] w-[100%]">
                        <div className="absolute bg-gray_51 lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] left-[0] top-[0] w-[12%]"></div>
                        <Line className="absolute h-[1px] left-[0] top-[8%] w-[12%]" />
                        <Line className="absolute h-[1px] left-[0] top-[0] w-[12%]" />
                        <Image
                          src="img_rowstablecust.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain top-[8%] w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_6.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain top-[13%] w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_2.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain top-[19%] w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_3.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain top-[25%] w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_4.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain top-[31%] w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_1.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain top-[37%] w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_5.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain top-[42%] w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[0] my-[auto] object-contain w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_1.svg"
                          className="absolute bottom-[40%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_2.svg"
                          className="absolute bottom-[35%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_3.svg"
                          className="absolute bottom-[29%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_4.svg"
                          className="absolute bottom-[23%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_1.svg"
                          className="absolute bottom-[17%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_5.svg"
                          className="absolute bottom-[12%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_4.svg"
                          className="absolute bottom-[6%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_rowstablecust_1.svg"
                          className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] object-contain w-[12%]"
                          alt="rowstablecust"
                        />
                        <Image
                          src="img_scrollbarscol.svg"
                          className="absolute lg:h-[475px] xl:h-[543px] h-[610px] 2xl:h-[611px] 3xl:h-[733px] inset-y-[0] left-[11%] my-[auto] object-contain w-[1%]"
                          alt="scrollbarscol"
                        />
                      </Stack>
                      <Text className="absolute font-bold left-[1%] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left top-[3%]">{`Estimated conversion`}</Text>
                    </Stack>
                  </Column>
                  <Image
                    src="img_rowstablecust_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] object-contain w-[12%]"
                    alt="rowstablecust"
                  />
                  <Image
                    src="img_rowstablecust_1.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] object-contain w-[12%]"
                    alt="rowstablecust"
                  />
                  <Image
                    src="img_rowstablecust_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] object-contain w-[12%]"
                    alt="rowstablecust"
                  />
                </Column>
                <Image
                  src="img_button_2.svg"
                  className="absolute bottom-[9%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[8%] object-contain rounded-radius58 w-[3%]"
                  alt="Button"
                />
              </Stack>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Frame2046Page;
