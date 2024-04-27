import React from "react";

const Page3 = () => {
  return (
    <div style={{ marginTop: "10%" }}>
      <div className="product">
        <div className="product-text">
          <div className="product-text1">
            <p className="pro-text-head">Accepted Electronics</p>
            <p className="pro-text-desc">
              We accept a wide range of electronic devices for recycling,
              including smartphones, laptops, tablets, televisions, and more.
              Our goal is to provide a convenient and responsible way to dispose
              of your old electronics.
            </p>
          </div>
          <div className="product-text1">
            <p className="pro-text-head">Recycling Process</p>
            <p className="pro-text-desc">
              Once you drop off your electronics, our team follows a strict
              recycling process to ensure that all components are properly
              handled and disposed of. We prioritize environmental
              sustainability and adhere to all relevant regulations.
            </p>
          </div>
          <div className="product-text1">
            <p className="pro-text-head">Data Security</p>
            <p className="pro-text-desc">
              We understand the importance of protecting your personal data.
              Before recycling any device, we ensure that all data is securely
              erased, giving you peace of mind that your information will not be
              compromised.
            </p>
          </div>
        </div>

        <div className="product-img">
          <img
            src="https://media.istockphoto.com/id/1150309710/photo/waste-management-woman-throwing-plastic-bottle-into-recycle-bin-waste-separation-trash-for.webp?b=1&s=170667a&w=0&k=20&c=gcGY4sGt3zrIiAaAMMfV0W2jlhXAzNwZFqYbP9huFuM="
            alt="Card image cap"
            height={400}
            width={500}
          />
        </div>
      </div>

      <div className="product">
        <div className="product-text">
          <div className="product-text1">
            <p className="pro-text-head">Benifits</p>
            <p className="pro-text-desc">
              Recycling electronics has numerous environmental benefits. It
              helps prevent toxic waste from ending up in landfills and
              contaminating the soil and water. By properly recycling electronic
              devices, we can reduce the need for raw materials, conserve
              energy, and decrease greenhouse gas emissions.
            </p>
          </div>
        </div>

        <div className="product-img">
          <img
            src="https://images.unsplash.com/photo-1603985529862-9e12198c9a60?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card image cap"
            height={400}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};
export default Page3;
