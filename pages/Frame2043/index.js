import React from "react";

import { useNavigate } from "react-router-dom";
import { Row } from "components/Row";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Column } from "components/Column";
import { Text } from "components/Text";
import { List } from "components/List";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Button } from "components/Button";

const Frame2043Page = () => {
  const navigate = useNavigate();

  const handleNavigate4 = () => navigate("/frame2044");

  return (
    <>
      <Row className="bg-gray_51 font-alata items-start mx-[auto] w-[100%]">
        <Stack className="3xl:h-[1046px] lg:h-[678px] xl:h-[775px] h-[871px] 2xl:h-[872px] w-[5%]">
          <Image
            src="img_sidemainnav.svg"
            className="absolute 3xl:h-[1046px] lg:h-[678px] xl:h-[775px] h-[871px] 2xl:h-[872px] inset-[0] object-cover w-[100%]"
            alt="sidemainnav"
          />
          <Image
            src="img_vector_1.svg"
            className="absolute lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] inset-x-[0] mx-[auto] object-contain top-[3%] lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
            alt="Vector"
          />
        </Stack>
        <Column className="items-center justify-end w-[95%]">
          <Row className="bg-gray_51 items-start justify-end w-[100%]">
            <Row className="items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[11px] my-[12.5px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[10%]">
              <Text className="font-alata font-normal not-italic text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9">{`Miner`}</Text>
              <Text className="font-apercupro font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 text-gray_400">{`/`}</Text>
              <Text className="font-alata font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9">{`Company Name`}</Text>
            </Row>
            <Stack className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[7%]">
              <Image
                src="defaultNoData.png"
                className="absolute lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] left-[14%] object-contain top-[0] w-[28%]"
                alt="wrappedbtns"
              />
              <Image
                src="defaultNoData.png"
                className="absolute bottom-[0] lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] object-cover rounded-radius12 w-[100%]"
                alt="btnsset"
              />
            </Stack>
            <Image
              src="img_btnsset_3.svg"
              className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] ml-[1037px] 3xl:ml-[1245px] lg:ml-[806px] xl:ml-[922px] mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain rounded-radius32 w-[28px]"
              alt="btnsset"
            />
          </Row>
          <Stack className="3xl:h-[1051px] lg:h-[681px] xl:h-[779px] h-[875px] 2xl:h-[876px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] w-[97%]">
            <div className="absolute border border-bluegray_51 border-solid lg:h-[551px] xl:h-[630px] h-[708px] 2xl:h-[709px] 3xl:h-[851px] rounded-radius16 top-[4%] w-[100%]"></div>
            <Column className="absolute bg-gray_51 inset-[0] w-[100%]">
              <Column className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                <Row className="bg-gray_51 items-center justify-end w-[100%]">
                  <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Campaign Analysis`}</Text>
                  <Image
                    src="img_bar_11.svg"
                    className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[5%]"
                    alt="bar"
                  />
                  <Image
                    src="img_bar_3.svg"
                    className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[1174px] lg:ml-[760px] xl:ml-[870px] ml-[978px] xl:mr-[10px] mr-[12px] 3xl:mr-[14px] lg:mr-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[8%]"
                    alt="bar"
                  />
                </Row>
                <Stack className="font-apercupro 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] w-[100%]">
                  <Row className="absolute bg-gray_51 items-center justify-start top-[0] w-[100%]">
                    <Image
                      src="img_icon24filter.svg"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[14px] xl:my-[16px] my-[19px] 3xl:my-[22px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="icon24filter"
                    />
                    <Row className="items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:mr-[1071px] mr-[1205px] 3xl:mr-[1446px] lg:mr-[937px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] rounded-radius8 w-[5%]">
                      <Image
                        src="img_icon24plus.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="icon24plus"
                      />
                      <Text className="font-medium xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] text-bluegray_702 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left">{`Filter`}</Text>
                    </Row>
                  </Row>
                  <Text className="absolute bg-gray_51 bottom-[0] font-medium leading-lh14000 lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] text-bluegray_201 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">
                    <span className="text-bluegray_201 text-fs12 font-apercupro text-center font-medium lg:text-fs9 xl:text-fs10 3xl:text-fs14">
                      <>{`Showing `}</>
                    </span>
                    <span className="text-bluegray_702 text-fs12 font-apercupro text-center font-medium lg:text-fs9 xl:text-fs10 3xl:text-fs14">
                      <>{`198`}</>
                    </span>
                    <span className="text-bluegray_201 text-fs12 font-apercupro text-center font-medium lg:text-fs9 xl:text-fs10 3xl:text-fs14">
                      <>{` from `}</>
                    </span>
                    <span className="text-bluegray_702 text-fs12 font-apercupro text-center font-medium lg:text-fs9 xl:text-fs10 3xl:text-fs14">
                      <>{`893`}</>
                    </span>
                    <span className="text-bluegray_201 text-fs12 font-apercupro text-center font-medium lg:text-fs9 xl:text-fs10 3xl:text-fs14">
                      <>{` results`}</>
                    </span>
                  </Text>
                </Stack>
              </Column>
              <Row className="font-apercupro items-center justify-evenly lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[100%]">
                <Row className="items-center justify-evenly 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] w-[88%]">
                  <Column className="items-center w-[38%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <List
                        className="gap-[0] grid grid-cols-3 min-h-[auto] w-[83%]"
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
                        <Column
                          className="common-pointer bg-gray_51 items-center justify-start w-[100%]"
                          onClick={handleNavigate4}
                        >
                          <Line className="h-[1px] w-[100%]" />
                          <Text className="font-bold lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] mx-[auto] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Spend`}</Text>
                          <Line className="h-[1px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[100%]" />
                        </Column>
                      </List>
                      <Stack className="bg-gray_51 lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[17%]">
                        <Text className="absolute font-bold h-[max-content] inset-y-[0] left-[26%] my-[auto] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Clicks`}</Text>
                        <Column className="absolute inset-[0] w-[100%]">
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                          <Column className="items-end w-[100%]">
                            <Line className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                          </Column>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1186"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[63%]">
                            <Image
                              src="img_icon24campaig_57.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,718.56`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`12345`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1187"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[52%]">
                            <Image
                              src="img_icon24campaig_58.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`new_offer_8735`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,571.63`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left">{`12345`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1188"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[44%]">
                            <Image
                              src="img_icon24campaig_59.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`spring_2020`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 w-[17%]">
                          <Column className="items-end mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                            <Text className="font-normal lg:mx-[12px] xl:mx-[14px] mx-[16px] 3xl:mx-[19px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$956.54`}</Text>
                          </Column>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`12345`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1189"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[73%]">
                            <Image
                              src="img_icon24campaig_60.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`UK_brand_DT_campaign`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,133.69`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`677`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1190"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[58%]">
                            <Image
                              src="img_icon24campaig_61.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`AU-DT-offer-2394`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,672.93`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`248`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1191"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[55%]">
                            <Image
                              src="img_icon24campaig_62.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`GR-DT-brand-12`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 w-[17%]">
                          <Column className="items-end mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                            <Text className="font-normal lg:mx-[12px] xl:mx-[14px] mx-[16px] 3xl:mx-[19px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$704.13`}</Text>
                          </Column>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`2,300`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1192"
                          >
                            <div className="w-full h-full absolute bg-green_A200 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[56%]">
                            <Image
                              src="img_icon24campaig_63.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Second-offer-EU`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,694.09`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`145`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Image
                          src="img_tableblock.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[16%]"
                          alt="tableblock"
                        />
                        <Column className="bg-gray_51 items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[72%]">
                            <Image
                              src="img_icon24campaig_64.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Follow-Fav-Teams-2020`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,501.84`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`805`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1193"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[73%]">
                            <Image
                              src="img_icon24campaig_65.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Resubscription-offer-20`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,542.24`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1,076`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1194"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 w-[49%]">
                          <Column className="items-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]">
                            <Row className="items-center justify-start lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[77%]">
                              <Image
                                src="img_icon24campaig_66.svg"
                                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                                alt="icon24campaig"
                              />
                              <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-main`}</Text>
                            </Row>
                          </Column>
                          <Line className="h-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,568.37`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`2,001`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1195"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-center w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] mx-[auto] w-[82%]">
                            <Image
                              src="img_icon24campaig_67.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Dave-Portnoy-campaign-20`}</Text>
                          </Row>
                          <Line className="h-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,493.87`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1,706`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1196"
                          >
                            <div className="w-full h-full absolute bg-gray_302 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-bluegray_400"
                              style={{ width: "21%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[74%]">
                            <Image
                              src="img_icon24campaig_68.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Sport-aud-second-offer`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 w-[17%]">
                          <Column className="items-end mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                            <Text className="font-normal lg:mx-[12px] xl:mx-[14px] mx-[16px] 3xl:mx-[19px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$704.83`}</Text>
                          </Column>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1,007`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1197"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[57%]">
                            <Image
                              src="img_icon24campaig_69.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`IT-DT-brand-19-2`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,054.87`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1,885`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1198"
                          >
                            <div className="w-full h-full absolute bg-gray_302 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-bluegray_400"
                              style={{ width: "21%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[75%]">
                            <Image
                              src="img_icon24campaig_70.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-test`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 w-[17%]">
                          <Column className="items-end mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                            <Text className="font-normal lg:mx-[12px] xl:mx-[14px] mx-[16px] 3xl:mx-[19px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$856.53`}</Text>
                          </Column>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1,461`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1199"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-start w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[73%]">
                            <Image
                              src="img_icon24campaig_71.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Resubscription-offer-20`}</Text>
                          </Row>
                          <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,542.24`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1,076`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1200"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 w-[49%]">
                          <Column className="items-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[100%]">
                            <Row className="items-center justify-start lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[77%]">
                              <Image
                                src="img_icon24campaig_72.svg"
                                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                                alt="icon24campaig"
                              />
                              <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-main`}</Text>
                            </Row>
                          </Column>
                          <Line className="h-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,568.37`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`2,001`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                    </List>
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1201"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-center w-[49%]">
                          <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] mx-[auto] w-[82%]">
                            <Image
                              src="img_icon24campaig_73.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Dave-Portnoy-campaign-20`}</Text>
                          </Row>
                          <Line className="h-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]" />
                        </Column>
                        <Column className="bg-gray_51 items-center w-[17%]">
                          <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,493.87`}</Text>
                          <Line className="h-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]" />
                        </Column>
                        <Stack className="bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1,706`}</Text>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Row>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Column className="bg-gray_51 items-center w-[16%]">
                          <div
                            className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                            name="Group1202"
                          >
                            <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                            <div
                              className="h-full absolute bg-white_A700"
                              style={{ width: "29%" }}
                            ></div>
                          </div>
                          <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                        </Column>
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[49%]">
                          <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]">
                            <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]"></div>
                            <Line className="absolute bottom-[0] h-[1px] w-[100%]" />
                          </Stack>
                          <Row className="absolute h-[max-content] inset-y-[0] items-center justify-start left-[9%] my-[auto] w-[77%]">
                            <Image
                              src="img_icon24campaig_74.svg"
                              className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                              alt="icon24campaig"
                            />
                            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-main`}</Text>
                          </Row>
                        </Stack>
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]">
                            <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]"></div>
                            <Line className="absolute bottom-[0] h-[1px] w-[100%]" />
                          </Stack>
                          <Text className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[max-content]">{`$1,568.37`}</Text>
                        </Stack>
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                          <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]">
                            <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]"></div>
                            <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                              <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                              <Column className="w-[100%]">
                                <Line className="h-[1px] w-[100%]" />
                              </Column>
                            </Column>
                          </Stack>
                          <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`2,001`}</Text>
                        </Stack>
                      </Row>
                    </List>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-gray_51 items-center w-[16%]">
                        <div
                          className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                          name="Group1203"
                        >
                          <div className="w-full h-full absolute bg-green_400 rounded-[30px]"></div>
                          <div
                            className="h-full absolute bg-white_A700"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                        <Line className="h-[1px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                      </Column>
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[49%]">
                        <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]">
                          <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]"></div>
                          <Line className="absolute bottom-[0] h-[1px] w-[100%]" />
                        </Stack>
                        <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[82%]">
                          <Image
                            src="img_icon24campaig_75.svg"
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="icon24campaig"
                          />
                          <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Dave-Portnoy-campaign-20`}</Text>
                        </Row>
                      </Stack>
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                        <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]">
                          <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]"></div>
                          <Line className="absolute bottom-[0] h-[1px] w-[100%]" />
                        </Stack>
                        <Text className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[max-content]">{`$1,493.87`}</Text>
                      </Stack>
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[17%]">
                        <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]">
                          <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]"></div>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[26%] my-[auto] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`1,706`}</Text>
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="items-center w-[31%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_9.svg"
                        className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold left-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                              name="Metric 1"
                              placeholder={`Metric 1`}
                            ></Input>
                            <Line className="absolute h-[1px] left-[0] top-[0] w-[33%]" />
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-x-[33%] inset-y-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                              name="Metric 2"
                              placeholder={`Metric 2`}
                            ></Input>
                            <Line className="absolute h-[1px] inset-x-[0] mx-[auto] top-[0] w-[33%]" />
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[21px] xl:pl-[24px] pl-[28px] 3xl:pl-[33px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$1,049.14"
                                placeholder={`$1,049.14`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_10.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[25%]">
                        <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`12`}</Text>
                        <Column className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]">
                          <Line className="h-[1px] w-[100%]" />
                        </Column>
                      </Column>
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[51%]">
                        <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]">
                          <Column className="absolute left-[0] w-[50%]">
                            <Column className="items-end mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                              <Text className="font-normal lg:mx-[12px] xl:mx-[13px] mx-[15.67px] 2xl:mx-[15px] 3xl:mx-[18px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,049.14`}</Text>
                            </Column>
                            <Column className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                          <Column className="absolute items-start justify-start right-[0] w-[50%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[1px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[9%] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$115.50`}</Text>
                      </Stack>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[21px] xl:pl-[24px] pl-[28px] 3xl:pl-[33px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$1,049.14"
                                placeholder={`$1,049.14`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`73`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$194.49"
                                placeholder={`$194.49`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`15`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[25px] xl:pl-[29px] pl-[33px] 3xl:pl-[39px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] placeholder:text-bluegray_702 text-bluegray_702 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[100%]"
                                name="$190.65"
                                placeholder={`$190.65`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$104.94"
                                placeholder={`$104.94`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`42`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$115.33"
                                placeholder={`$115.33`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`11`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$214.19"
                                placeholder={`$214.19`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`8`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$91.24"
                                placeholder={`$91.24`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`21`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$79.51"
                                placeholder={`$79.51`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`37`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$118.74"
                                placeholder={`$118.74`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`18`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$184.69"
                                placeholder={`$184.69`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`15`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$157.01"
                                placeholder={`$157.01`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`6`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$164.17"
                                placeholder={`$164.17`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`14`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$184.69"
                                placeholder={`$184.69`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                            <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                              <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`19`}</Text>
                              <Input
                                className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                name="$157.01"
                                placeholder={`$157.01`}
                              ></Input>
                            </Row>
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                          src="img_tableblock_2.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                          alt="tableblock"
                        />
                        <Column className="items-start w-[76%]">
                          <Column className="items-center w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                              <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                                <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`17`}</Text>
                                <Input
                                  className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$164.17"
                                  placeholder={`$164.17`}
                                ></Input>
                              </Row>
                              <Column className="absolute right-[0] w-[33%]">
                                <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                  <Input
                                    className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                          src="img_tableblock_2.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                          alt="tableblock"
                        />
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[76%]">
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[76%]">
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
                  <Column className="items-center w-[31%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_9.svg"
                        className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold left-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                              name="Metric 5"
                              placeholder={`Metric 5`}
                            ></Input>
                            <Line className="absolute h-[1px] left-[0] top-[0] w-[33%]" />
                            <Input
                              className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-x-[33%] inset-y-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                              name="Metric 6"
                              placeholder={`Metric 6`}
                            ></Input>
                            <Line className="absolute h-[1px] inset-x-[0] mx-[auto] top-[0] w-[33%]" />
                            <Column className="absolute right-[0] w-[33%]">
                              <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`3`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,355.01"
                                placeholder={`$1,355.01`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$652.08"
                                  placeholder={`$652.08`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`8`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,109.25"
                                placeholder={`$1,109.25`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$434.21"
                                  placeholder={`$434.21`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`9`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,008.71"
                                placeholder={`$1,008.71`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$180.37"
                                  placeholder={`$180.37`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`11`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$898.23"
                                placeholder={`$898.23`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$638.98"
                                  placeholder={`$638.98`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`4`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,580.82"
                                placeholder={`$1,580.82`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$949.96"
                                  placeholder={`$949.96`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`6`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$886.22"
                                placeholder={`$886.22`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$68.49"
                                  placeholder={`$68.49`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`16`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,653.48"
                                placeholder={`$1,653.48`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$105.08"
                                  placeholder={`$105.08`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`11`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$956.13"
                                placeholder={`$956.13`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$77.12"
                                  placeholder={`$77.12`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`9`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,547.62"
                                placeholder={`$1,547.62`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$132.12"
                                  placeholder={`$132.12`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`14`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[25px] xl:pl-[29px] pl-[33px] 3xl:pl-[39px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,741.22"
                                placeholder={`$1,741.22`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$119.71"
                                  placeholder={`$119.71`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`8`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,604.28"
                                placeholder={`$1,604.28`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$102.95"
                                  placeholder={`$102.95`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`2`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,252.59"
                                placeholder={`$1,252.59`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$71.62"
                                  placeholder={`$71.62`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`7`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,150.07"
                                placeholder={`$1,150.07`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$125.53"
                                  placeholder={`$125.53`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`19`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[21px] xl:pl-[24px] pl-[28px] 3xl:pl-[33px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,049.14"
                                placeholder={`$1,049.14`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$132.95"
                                  placeholder={`$132.95`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`12`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,252.59"
                                placeholder={`$1,252.59`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$71.62"
                                  placeholder={`$71.62`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
                        </Column>
                        <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                        <Column className="items-center w-[100%]">
                          <Line className="h-[1px] mx-[auto] w-[33%]" />
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Image
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Column className="items-start w-[76%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                              <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`11`}</Text>
                              <Input
                                className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                name="$1,150.07"
                                placeholder={`$1,150.07`}
                              ></Input>
                            </Stack>
                            <Column className="w-[33%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                  name="$125.53"
                                  placeholder={`$125.53`}
                                ></Input>
                                <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                              </Stack>
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Row>
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
                          src="img_tableblock_2.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                          alt="tableblock"
                        />
                        <Column className="items-start w-[76%]">
                          <Column className="items-center w-[100%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                                <Text className="absolute bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]">{`2`}</Text>
                                <Input
                                  className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[21px] xl:pl-[24px] pl-[28px] 3xl:pl-[33px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                  name="$1,049.14"
                                  placeholder={`$1,049.14`}
                                ></Input>
                              </Stack>
                              <Column className="w-[33%]">
                                <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                  <Input
                                    className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                                    name="$132.95"
                                    placeholder={`$132.95`}
                                  ></Input>
                                  <Line className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[1px]" />
                                </Stack>
                                <Line className="h-[1px] w-[100%]" />
                              </Column>
                            </Row>
                          </Column>
                          <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                          <Column className="items-center w-[100%]">
                            <Line className="h-[1px] mx-[auto] w-[33%]" />
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-center justify-evenly w-[100%]">
                        <Image
                          src="img_tableblock_2.svg"
                          className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                          alt="tableblock"
                        />
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[76%]">
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Column className="items-center w-[100%]">
                              <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                                <Row className="absolute inset-[0] items-center justify-evenly w-[100%]">
                                  <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                                    <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] w-[50%]"></div>
                                    <Input
                                      className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                      name="$1,150.07"
                                      placeholder={`$1,150.07`}
                                    ></Input>
                                  </Stack>
                                  <Input
                                    className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                                    name="$125.53"
                                    placeholder={`$125.53`}
                                  ></Input>
                                </Row>
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
                        src="img_tableblock_2.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[24%]"
                        alt="tableblock"
                      />
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[76%]">
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                              <Row className="absolute inset-[0] items-center justify-evenly w-[100%]">
                                <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[67%]">
                                  <div className="absolute bg-gray_51 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] left-[0] w-[50%]"></div>
                                  <Input
                                    className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[21px] xl:pl-[24px] pl-[28px] 3xl:pl-[33px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] right-[0] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                                    name="$1,049.14"
                                    placeholder={`$1,049.14`}
                                  ></Input>
                                </Stack>
                                <Input
                                  className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[33%]"
                                  name="$132.95"
                                  placeholder={`$132.95`}
                                ></Input>
                              </Row>
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
                </Row>
                <Stack className="lg:h-[521px] xl:h-[596px] h-[669px] 2xl:h-[670px] 3xl:h-[804px] w-[12%]">
                  <Stack className="absolute lg:h-[521px] xl:h-[596px] h-[669px] 2xl:h-[670px] 3xl:h-[804px] inset-[0] w-[100%]">
                    <Column className="absolute bottom-[2%] inset-x-[0] items-center justify-end top-[0] w-[100%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                          <Input
                            className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="Estimated conve"
                            placeholder={`Estimated conversion`}
                          ></Input>
                          <Line className="absolute h-[1px] top-[0] w-[100%]" />
                        </Stack>
                        <Line className="h-[1px] w-[100%]" />
                      </Column>
                      <Image
                        src="img_rowstablecust_7.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_8.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_9.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_10.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_11.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_8.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_12.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_7.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_8.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_9.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_10.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_11.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_8.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_12.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_11.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_8.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_12.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_8.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                      <Image
                        src="img_rowstablecust_12.svg"
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[100%]"
                        alt="rowstablecust"
                      />
                    </Column>
                    <Image
                      src="img_button_3.svg"
                      className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain right-[9%] rounded-radius58 w-[27%]"
                      alt="Button"
                    />
                  </Stack>
                  <Image
                    src="img_custombtnfull.svg"
                    className="absolute bottom-[18%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain right-[6%] rounded-radius58 w-[27%]"
                    alt="custombtnfull"
                  />
                </Stack>
              </Row>
            </Column>
            <Button className="absolute bg-deep_purple_A200 border-bw font-normal left-[1%] not-italic xl:pb-[4px] lg:pb-[4px] pb-[5.5px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] 3xl:pr-[10px] lg:pr-[7px] xl:pr-[8px] pr-[9px] lg:pt-[5px] xl:pt-[6px] pt-[7.5px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius3 text-center lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-white_A700 top-[0] tracking-ls1 w-[8%]">{`Import Dataset`}</Button>
          </Stack>
        </Column>
      </Row>
    </>
  );
};

export default Frame2043Page;
