import { Tabs } from "antd";
import React, {useState} from "react";
import Billing from "./Billing";
import Confirm from "./Confirm";
import Personal from "./Personal";

const PaymentFlow = () => {
  const [activeKey, setActiveKey] = useState('')
  const { TabPane } = Tabs;
  function onKeyChange(){

  }
  return (
    <div id="paymentFlow">
      <div className="bgImg">
        <img src="/images/background.svg" alt="" />
      </div>
      <div className="container">
        <h2>Complete Your Payment</h2>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Personal Info" key="1">
            <Personal/>
          </TabPane>
          <TabPane tab="Billing Info" key="2">
            <Billing/>
          </TabPane>
          <TabPane tab="Confirm Payment" key="3">
            <Confirm/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default PaymentFlow;
