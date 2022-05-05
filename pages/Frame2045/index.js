import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { List } from "components/List";
import { Line } from "components/Line";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Image } from "components/Image";

const Frame2045Page = () => {
  const navigate = useNavigate();

  const handleNavigate3 = () => navigate("/frame2046");

  return (
    <>
      <Column className="font-apercupro items-center justify-end mx-[auto] overflow-auto w-[100%]">
        <Stack className="3xl:h-[1046px] lg:h-[678px] xl:h-[775px] h-[871px] 2xl:h-[872px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
          <Stack className="absolute 3xl:h-[1046px] lg:h-[678px] xl:h-[775px] h-[871px] 2xl:h-[872px] inset-[0] w-[100%]">
            <div className="absolute bg-gray_51 3xl:h-[1046px] lg:h-[678px] xl:h-[775px] h-[871px] 2xl:h-[872px] inset-[0] w-[100%]"></div>
            <Column className="absolute bottom-[3%] items-center justify-end left-[0] w-[34%]">
              <Row className="items-center justify-evenly w-[100%]">
                <List
                  className="gap-[0] grid grid-cols-2 min-h-[auto] w-[60%]"
                  orientation="horizontal"
                >
                  <Stack className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] w-[100%]">
                    <Stack className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] inset-[0] w-[100%]">
                      <div className="absolute bg-gray_51 lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] inset-[0] w-[100%]"></div>
                      <Column className="absolute inset-[0] w-[100%]">
                        <Line className="h-[1px] w-[100%]" />
                        <Line className="h-[1px] lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[100%]" />
                      </Column>
                    </Stack>
                    <Text className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[13%] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Header`}</Text>
                  </Stack>
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group510"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_19.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group511"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_20.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`new_offer_8735`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
                        name="$1,571.63"
                        placeholder={`$1,571.63`}
                      ></Input>
                      <Column className="w-[50%]">
                        <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                          <Input
                            className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-y-[0] left-[0] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] right-[1%] placeholder:text-bluegray_702 text-bluegray_702 lg:text-fs10 xl:text-fs11 text-fs13 3xl:text-fs15 text-left w-[99%]"
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group512"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_21.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`spring_2020`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group513"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_22.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`UK_brand_DT_campaign`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group514"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_23.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`AU-DT-offer-2394`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group515"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_24.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`GR-DT-brand-12`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group516"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_25.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Second-offer-EU`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_26.svg"
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
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group517"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_27.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Resubscription-offer-20`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group518"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_28.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-main`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group519"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_29.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Dave-Portnoy-campaign-20`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group520"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_30.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Sport-aud-second-offer`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group521"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_31.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`IT-DT-brand-19-2`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group522"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_32.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-test`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group523"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_33.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Resubscription-offer-20`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
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
              <Row className="items-center justify-start w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group524"
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
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                    <Image
                      src="img_icon24campaig_34.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-main`}</Text>
                  </Row>
                  <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="items-start mr-[1px] w-[40%]">
                  <Column className="w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
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
                <Row className="items-center justify-start w-[100%]">
                  <Column className="bg-gray_51 items-center w-[14%]">
                    <div
                      className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                      name="Group525"
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
                    <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] w-[26%]">
                      <Image
                        src="img_icon24campaig_35.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="icon24campaig"
                      />
                      <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Dave-Portnoy-campaign-20`}</Text>
                    </Row>
                    <Column className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                      <Line className="h-[1px] w-[100%]" />
                    </Column>
                  </Column>
                  <Column className="items-start mr-[1px] w-[40%]">
                    <Column className="w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[50%]"
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
                <Row className="items-center justify-start w-[100%]">
                  <Column className="bg-gray_51 items-center w-[14%]">
                    <div
                      className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                      name="Group526"
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
                    <Row className="absolute h-[max-content] inset-y-[0] items-center justify-center left-[9%] my-[auto] w-[26%]">
                      <Image
                        src="img_icon24campaig_36.svg"
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="icon24campaig"
                      />
                      <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`DT-Brand-campaign-main`}</Text>
                    </Row>
                  </Stack>
                  <Column className="items-start mr-[1px] w-[40%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[0] grid grid-cols-2 inset-[0] items-center justify-evenly w-[100%]">
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
              <Row className="items-center justify-start lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]">
                <Column className="bg-gray_51 items-center w-[14%]">
                  <div
                    className="lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] overflow-hidden relative w-[34%]"
                    name="Group527"
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
                  <Row className="absolute h-[max-content] inset-y-[0] items-center justify-center left-[9%] my-[auto] w-[26%]">
                    <Image
                      src="img_icon24campaig_37.svg"
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="icon24campaig"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Dave-Portnoy-campaign-20`}</Text>
                  </Row>
                </Stack>
                <Column className="items-start mr-[1px] w-[40%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[0] grid grid-cols-2 inset-[0] items-center justify-evenly w-[100%]">
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
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
            <Column className="absolute bottom-[3%] right-[0] w-[12%]">
              <Stack className="lg:h-[486px] xl:h-[556px] h-[624px] 2xl:h-[625px] 3xl:h-[750px] w-[100%]">
                <Column className="absolute bg-gray_51 items-start justify-start top-[0] w-[100%]">
                  <Column className="w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                  <Text className="font-bold lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`Estimated conversion`}</Text>
                  <Column className="lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Image
                  src="img_rowstablecust.svg"
                  className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover top-[8%] w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_1.svg"
                  className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover top-[13%] w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_2.svg"
                  className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover top-[19%] w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_3.svg"
                  className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover top-[25%] w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_4.svg"
                  className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover top-[31%] w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_1.svg"
                  className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover top-[37%] w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_5.svg"
                  className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover top-[42%] w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust.svg"
                  className="absolute bottom-[46%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-x-[0] object-cover top-[48%] w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_1.svg"
                  className="absolute bottom-[40%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_2.svg"
                  className="absolute bottom-[35%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_3.svg"
                  className="absolute bottom-[29%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_4.svg"
                  className="absolute bottom-[23%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_1.svg"
                  className="absolute bottom-[17%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_5.svg"
                  className="absolute bottom-[12%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_4.svg"
                  className="absolute bottom-[6%] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_rowstablecust_1.svg"
                  className="absolute bottom-[0] lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-cover w-[100%]"
                  alt="rowstablecust"
                />
                <Image
                  src="img_scrollbarscol.svg"
                  className="absolute lg:h-[475px] xl:h-[543px] h-[610px] 2xl:h-[611px] 3xl:h-[733px] inset-y-[0] my-[auto] object-contain right-[0] w-[10%]"
                  alt="scrollbarscol"
                />
              </Stack>
              <Column className="w-[100%]">
                <Image
                  src="img_rowstablecust_5.svg"
                  className="lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] object-cover w-[100%]"
                  alt="rowstablecust"
                />
                <Line className="h-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[100%]" />
                <Line className="h-[1px] lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] w-[100%]" />
              </Column>
            </Column>
            <header className="absolute font-alata inset-x-[0] top-[5%] w-[100%]">
              <Stack className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] w-[100%]">
                <Stack className="absolute lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] inset-[0] w-[100%]">
                  <Stack className="absolute lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] inset-[0] w-[100%]">
                    <div className="absolute bg-gray_51 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] inset-[0] w-[100%]"></div>
                    <div className="absolute bg-gray_51 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] inset-[0] w-[100%]"></div>
                  </Stack>
                  <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                    <Text className="font-normal lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left">{`Campaign Analysis`}</Text>
                    <Image
                      src="img_bar_4.svg"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] object-contain w-[4%]"
                      alt="bar"
                    />
                    <Image
                      src="img_bar_5.svg"
                      className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[1087px] 3xl:ml-[1305px] lg:ml-[845px] xl:ml-[966px] object-contain w-[7%]"
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
                    src="img_bar_7.svg"
                    className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] ml-[1051px] 3xl:ml-[1261px] lg:ml-[817px] xl:ml-[934px] object-contain w-[7%]"
                    alt="bar"
                  />
                </Row>
              </Stack>
            </header>
            <Row className="absolute bg-gray_51 inset-x-[0] items-center justify-between top-[0] w-[100%]">
              <Row className="items-center justify-center lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:my-[11px] my-[12.5px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[9%]">
                <Text className="font-alata font-normal not-italic text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9">{`Miner`}</Text>
                <Text className="font-apercupro font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9 text-gray_400">{`/`}</Text>
                <Text className="font-alata font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_400 text-center text-fs11 3xl:text-fs13 lg:text-fs8 xl:text-fs9">{`Company Name`}</Text>
              </Row>
              <Image
                src="img_btnsset_1.svg"
                className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] xl:mr-[10px] mr-[12px] 3xl:mr-[14px] lg:mr-[9px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain rounded-radius32 w-[28px]"
                alt="btnsset"
              />
            </Row>
            <Text className="absolute bg-gray_51 font-medium inset-x-[0] leading-lh14000 lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] xl:py-[10px] py-[11.5px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] text-bluegray_201 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left top-[17%] w-[100%]">
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
          </Stack>
          <Row className="absolute bottom-[2%] items-start justify-start right-[1%] w-[65%]">
            <Column className="3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] w-[42%]">
              <Row className="items-center justify-evenly w-[100%]">
                <Image
                  src="img_tableblock_1.svg"
                  className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
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
                      <Stack className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="Metric 3"
                          placeholder={`Metric 3`}
                        ></Input>
                        <Column className="absolute inset-[0] w-[100%]">
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                          <Column className="items-end w-[100%]">
                            <Line className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          </Column>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,049.14"
                          placeholder={`$1,049.14`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$110.20"
                          placeholder={`$110.20`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  src="img_tableblock_4.svg"
                  className="common-pointer lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  onClick={handleNavigate3}
                  alt="tableblock"
                />
                <Column className="items-start w-[26%]">
                  <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`12`}</Text>
                  <Column className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]">
                    <Line className="h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[52%]">
                  <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] w-[100%]">
                    <Column className="absolute left-[0] w-[50%]">
                      <Column className="items-end mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                        <Text className="font-normal lg:mx-[12px] xl:mx-[13px] mx-[15.67px] 2xl:mx-[15px] 3xl:mx-[18px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$1,049.14`}</Text>
                      </Column>
                      <Column className="3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]">
                        <Line className="h-[1px] w-[100%]" />
                      </Column>
                    </Column>
                    <Column className="absolute items-start justify-start right-[0] w-[50%]">
                      <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                      <Column className="w-[100%]">
                        <Line className="h-[1px] w-[100%]" />
                      </Column>
                    </Column>
                  </Stack>
                  <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[8%] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$115.50`}</Text>
                </Stack>
              </Row>
              <Row className="items-center justify-evenly w-[100%]">
                <Image
                  src="img_tableblock_2.svg"
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,049.14"
                          placeholder={`$1,049.14`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$156.96"
                          placeholder={`$156.96`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`73`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$194.49"
                          placeholder={`$194.49`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$69.46"
                          placeholder={`$69.46`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`15`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$190.65"
                          placeholder={`$190.65`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$247.49"
                          placeholder={`$247.49`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$104.94"
                          placeholder={`$104.94`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$177.04"
                          placeholder={`$177.04`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`42`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$115.33"
                          placeholder={`$115.33`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$195.97"
                          placeholder={`$195.97`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`11`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$214.19"
                          placeholder={`$214.19`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$226.38"
                          placeholder={`$226.38`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`8`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$91.24"
                          placeholder={`$91.24`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$113.12"
                          placeholder={`$113.12`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`21`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$79.51"
                          placeholder={`$79.51`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$110.56"
                          placeholder={`$110.56`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`37`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$118.74"
                          placeholder={`$118.74`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$75.39"
                          placeholder={`$75.39`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`18`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$184.69"
                          placeholder={`$184.69`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$227.06"
                          placeholder={`$227.06`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`15`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$157.01"
                          placeholder={`$157.01`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$213.91"
                          placeholder={`$213.91`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`6`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$164.17"
                          placeholder={`$164.17`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$112.58"
                          placeholder={`$112.58`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`14`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$184.69"
                          placeholder={`$184.69`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$227.06"
                          placeholder={`$227.06`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`19`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$157.01"
                          placeholder={`$157.01`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$213.91"
                          placeholder={`$213.91`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Stack>
                  </Column>
                  <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                  <Column className="items-center w-[100%]">
                    <Line className="h-[1px] mx-[auto] w-[33%]" />
                  </Column>
                </Column>
              </Row>
              <Column className="w-[100%]">
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`17`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$164.17"
                            placeholder={`$164.17`}
                          ></Input>
                        </Row>
                        <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                          <Input
                            className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$112.58"
                            placeholder={`$112.58`}
                          ></Input>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Column className="w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Row className="items-start justify-start w-[100%]">
                      <Line className="bg-gray_51 h-[1px] w-[22%]" />
                      <Line className="bg-gray_51 h-[1px] w-[26%]" />
                      <Line className="h-[1px] mb-[1px] mr-[101.33px] 2xl:mr-[101px] 3xl:mr-[121px] lg:mr-[78px] xl:mr-[90px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[26%]" />
                    </Row>
                    <Row className="items-end justify-end w-[100%]">
                      <Text className="font-normal ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`19`}</Text>
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal lg:ml-[54px] xl:ml-[62px] ml-[70.67px] 2xl:ml-[70px] 3xl:ml-[84px] not-italic xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[26%]"
                        name="$157.01"
                        placeholder={`$157.01`}
                      ></Input>
                      <Image
                        src="img_divright.svg"
                        className="h-[1px] 3xl:h-[2px] 2xl:h-[2px] ml-[100.99px] 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[78px] xl:ml-[89px] object-contain w-[0]"
                        alt="divright"
                      />
                    </Row>
                    <Row className="items-end justify-between mb-[1px] w-[100%]">
                      <Line className="h-[1px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[26%]" />
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[26%]"
                        name="$213.91"
                        placeholder={`$213.91`}
                      ></Input>
                    </Row>
                  </Column>
                  <Column className="items-end lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[100%]">
                    <Line className="h-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[26%]" />
                  </Column>
                </Column>
              </Column>
              <Column className="lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]">
                <Column className="w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Row className="items-center justify-evenly w-[74%]">
                      <Line className="bg-gray_51 h-[1px] w-[30%]" />
                      <Line className="bg-gray_51 h-[1px] w-[35%]" />
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[35%]"
                        name="$164.17"
                        placeholder={`$164.17`}
                      ></Input>
                    </Row>
                    <Image
                      src="img_divright.svg"
                      className="h-[1px] 3xl:h-[2px] 2xl:h-[2px] object-contain w-[0]"
                      alt="divright"
                    />
                  </Row>
                </Column>
                <Column className="items-end lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]">
                  <Input
                    className="bg-gray_51 placeholder:bg-transparent border-0 font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[26%]"
                    name="$112.58"
                    placeholder={`$112.58`}
                  ></Input>
                </Column>
                <Column className="items-center lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[100%]">
                  <Row className="items-center justify-center w-[100%]">
                    <Text className="font-normal ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`17`}</Text>
                    <Line className="h-[1px] lg:ml-[54px] xl:ml-[62px] ml-[70.67px] 2xl:ml-[70px] 3xl:ml-[84px] mr-[101.33px] 2xl:mr-[101px] 3xl:mr-[121px] lg:mr-[78px] xl:mr-[90px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[26%]" />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] w-[100%]">
                    <Line className="h-[1px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] w-[26%]" />
                    <Line className="h-[1px] w-[26%]" />
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] w-[42%]">
              <Row className="items-center justify-evenly w-[100%]">
                <Image
                  src="img_tableblock_1.svg"
                  className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
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
                      <Stack className="absolute lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-bold inset-[0] lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="Metric 7"
                          placeholder={`Metric 7`}
                        ></Input>
                        <Column className="absolute inset-[0] w-[100%]">
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                          <Column className="items-end w-[100%]">
                            <Line className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          </Column>
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`3`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,355.01"
                          placeholder={`$1,355.01`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$652.08"
                          placeholder={`$652.08`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`8`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,109.25"
                          placeholder={`$1,109.25`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$434.21"
                          placeholder={`$434.21`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`9`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,008.71"
                          placeholder={`$1,008.71`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$180.37"
                          placeholder={`$180.37`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`11`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$898.23"
                          placeholder={`$898.23`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$638.98"
                          placeholder={`$638.98`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`4`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,580.82"
                          placeholder={`$1,580.82`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$949.96"
                          placeholder={`$949.96`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`6`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$886.22"
                          placeholder={`$886.22`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$68.49"
                          placeholder={`$68.49`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`16`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,653.48"
                          placeholder={`$1,653.48`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$105.08"
                          placeholder={`$105.08`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`11`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$956.13"
                          placeholder={`$956.13`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$77.12"
                          placeholder={`$77.12`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`9`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,547.62"
                          placeholder={`$1,547.62`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$132.12"
                          placeholder={`$132.12`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="tableblock"
                />
                <Column className="items-start w-[78%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`14`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,741.22"
                          placeholder={`$1,741.22`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$119.71"
                          placeholder={`$119.71`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`8`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,604.28"
                          placeholder={`$1,604.28`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$102.95"
                          placeholder={`$102.95`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`2`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,252.59"
                          placeholder={`$1,252.59`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$71.62"
                          placeholder={`$71.62`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`7`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,150.07"
                          placeholder={`$1,150.07`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$125.53"
                          placeholder={`$125.53`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`19`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,049.14"
                          placeholder={`$1,049.14`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$132.95"
                          placeholder={`$132.95`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`12`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,252.59"
                          placeholder={`$1,252.59`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$71.62"
                          placeholder={`$71.62`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
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
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                      <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                        <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`11`}</Text>
                        <Input
                          className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$1,150.07"
                          placeholder={`$1,150.07`}
                        ></Input>
                      </Row>
                      <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                        <Input
                          className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                          name="$125.53"
                          placeholder={`$125.53`}
                        ></Input>
                        <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                          <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                          <Column className="w-[100%]">
                            <Line className="h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                      </Stack>
                    </Stack>
                  </Column>
                  <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                  <Column className="items-center w-[100%]">
                    <Line className="h-[1px] mx-[auto] w-[33%]" />
                  </Column>
                </Column>
              </Row>
              <Column className="w-[100%]">
                <Row className="items-center justify-evenly w-[100%]">
                  <Image
                    src="img_tableblock_5.svg"
                    className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                    alt="tableblock"
                  />
                  <Column className="items-start w-[78%]">
                    <Column className="w-[100%]">
                      <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]">
                        <Row className="absolute gap-[1px] grid grid-cols-2 items-center justify-evenly left-[0] w-[67%]">
                          <Text className="bg-gray_51 font-normal lg:leading-lh12 xl:leading-lh14 2xl:leading-lh16 leading-lh1600 3xl:leading-lh19 not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]">{`2`}</Text>
                          <Input
                            className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$1,049.14"
                            placeholder={`$1,049.14`}
                          ></Input>
                        </Row>
                        <Stack className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] right-[0] w-[33%]">
                          <Input
                            className="absolute bg-gray_51 placeholder:bg-transparent border-0 font-normal inset-[0] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[100%]"
                            name="$132.95"
                            placeholder={`$132.95`}
                          ></Input>
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Line className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[0.67px]" />
                            <Column className="w-[100%]">
                              <Line className="h-[1px] w-[100%]" />
                            </Column>
                          </Column>
                        </Stack>
                      </Stack>
                    </Column>
                    <Line className="h-[1px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[33%]" />
                    <Column className="items-center w-[100%]">
                      <Line className="h-[1px] mx-[auto] w-[33%]" />
                    </Column>
                  </Column>
                </Row>
                <Column className="w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Row className="items-start justify-start w-[100%]">
                      <Line className="bg-gray_51 h-[1px] w-[22%]" />
                      <Line className="bg-gray_51 h-[1px] w-[26%]" />
                      <Line className="h-[1px] mb-[1px] mr-[101.33px] 2xl:mr-[101px] 3xl:mr-[121px] lg:mr-[78px] xl:mr-[90px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[26%]" />
                    </Row>
                    <Row className="items-end justify-end w-[100%]">
                      <Text className="font-normal ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`11`}</Text>
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal lg:ml-[54px] xl:ml-[62px] ml-[70.67px] 2xl:ml-[70px] 3xl:ml-[84px] not-italic xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[26%]"
                        name="$1,150.07"
                        placeholder={`$1,150.07`}
                      ></Input>
                      <Image
                        src="img_divright.svg"
                        className="h-[1px] 3xl:h-[2px] 2xl:h-[2px] ml-[100.99px] 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[78px] xl:ml-[89px] object-contain w-[0]"
                        alt="divright"
                      />
                    </Row>
                    <Row className="items-end justify-between mb-[1px] w-[100%]">
                      <Line className="h-[1px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[26%]" />
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[26%]"
                        name="$125.53"
                        placeholder={`$125.53`}
                      ></Input>
                    </Row>
                  </Column>
                  <Column className="items-end lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[100%]">
                    <Line className="h-[1px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[26%]" />
                  </Column>
                </Column>
              </Column>
              <Column className="lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]">
                <Column className="w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Row className="items-center justify-evenly w-[74%]">
                      <Line className="bg-gray_51 h-[1px] w-[30%]" />
                      <Line className="bg-gray_51 h-[1px] w-[35%]" />
                      <Input
                        className="bg-gray_51 placeholder:bg-transparent border-0 font-normal not-italic xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[35%]"
                        name="$1,049.14"
                        placeholder={`$1,049.14`}
                      ></Input>
                    </Row>
                    <Image
                      src="img_divright.svg"
                      className="h-[1px] 3xl:h-[2px] 2xl:h-[2px] object-contain w-[0]"
                      alt="divright"
                    />
                  </Row>
                </Column>
                <Column className="items-end lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]">
                  <Input
                    className="bg-gray_51 placeholder:bg-transparent border-0 font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] placeholder:text-bluegray_702 text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left w-[26%]"
                    name="$132.95"
                    placeholder={`$132.95`}
                  ></Input>
                </Column>
                <Column className="items-center lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[100%]">
                  <Row className="items-center justify-center w-[100%]">
                    <Text className="font-normal ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] not-italic text-bluegray_702 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`2`}</Text>
                    <Line className="h-[1px] lg:ml-[54px] xl:ml-[62px] ml-[70.67px] 2xl:ml-[70px] 3xl:ml-[84px] mr-[101.33px] 2xl:mr-[101px] 3xl:mr-[121px] lg:mr-[78px] xl:mr-[90px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[26%]" />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] w-[100%]">
                    <Line className="h-[1px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] w-[26%]" />
                    <Line className="h-[1px] w-[26%]" />
                  </Row>
                </Column>
              </Column>
            </Column>
            <Image
              src="img_button_1.svg"
              className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[101px] ml-[114px] 3xl:ml-[136px] lg:ml-[88px] lg:mt-[492px] xl:mt-[563px] mt-[633px] 3xl:mt-[760px] object-contain rounded-radius58 w-[5%]"
              alt="Button"
            />
          </Row>
          <Row className="absolute font-alata items-center justify-start left-[1%] top-[13%] w-[14%]">
            <Image
              src="img_icon24filter.svg"
              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
              alt="icon24filter"
            />
            <Row className="bg-orange_50 items-center justify-center lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] my-[1px] rounded-radius28 w-[39%]">
              <Text className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] not-italic text-bluegray_900 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-left">{`$700`}</Text>
              <Image
                src="img_icon24cross.svg"
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
        </Stack>
      </Column>
    </>
  );
};

export default Frame2045Page;
