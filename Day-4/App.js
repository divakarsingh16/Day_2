import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => (
  <img
    className="logo"
    alt="logo"
    src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5168794.jpeg"
  />
);
const Header = () => (
  <div className="header">
    <Title />

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "227481",
      name: "Haiku, The Asian Kitchen",
      uuid: "2d9b43fa-1b73-4c4d-887e-f7c099e0cb8d",
      city: "3",
      area: "Gachibowli",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "87597419769f92d4ebeeaa6974d5fd04",
      cuisines: ["Asian", "Japanese"],
      tags: [],
      costForTwo: 150000,
      costForTwoString: "₹1500 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: "haiku,-the-asian-kitchen-gachibowli-gachibowli",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Ramky Grandoise, Beside Ramky towers, P Janardhan Reddy Nagar,  Gachibowli, Hyderabad, Telangana, 500032",
      locality: "Beside Ramky Towers",
      parentId: 375068,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "227481",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹1500 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "630117",
      name: "Maredumilli - The Forest Grill",
      uuid: "aec1a1b7-ad3a-4974-bbcc-0e34de8a2dfd",
      city: "3",
      area: "Gachibowli",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "ubcisx68gk5q39labli3",
      cuisines: ["South Indian"],
      tags: [],
      costForTwo: 140000,
      costForTwoString: "₹1400 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 40,
      maxDeliveryTime: 40,
      slaString: "40 MINS",
      lastMileTravel: 2.5999999046325684,
      slugs: {
        restaurant: "maredumilli---the-forest-grill-gachibowli-gachibowli",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "1 ST FLOOR, CYBER EDIFICE, GREEN LAND COLONY, P JANARDHAN NAGAR, GACHIBOWLI",
      locality: "Green land colony",
      parentId: 376326,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "630117",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        lastMileTravel: 2.5999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹1400 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "51389",
      name: "The Lal Street",
      uuid: "49b2dda7-043b-4a30-967f-63ebbfe6873b",
      city: "3",
      area: "Gachibowli",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "nvrasipoql98z0zykmjw",
      cuisines: ["Italian", "Bakery"],
      tags: [],
      costForTwo: 130000,
      costForTwoString: "₹1300 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "the-lal-street-gachibowli-gachibowli",
        city: "hyderabad",
      },
      cityState: "3",
      address: "Level 2, SLN Terminus Mall,Gachibowli, Hyderabad",
      locality: "Sln Terminus Mall",
      parentId: 19221,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "51389",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹1300 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "383466",
      name: "Oakleaf: Oakwood Residence Kapil Hyderabad",
      uuid: "9d3003f6-9193-4209-acb5-9ca208d80a01",
      city: "3",
      area: "Nanakramguda",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "ujs4rzcukpwa716wzxv6",
      cuisines: ["Indian", "Asian", "European"],
      tags: [],
      costForTwo: 120000,
      costForTwoString: "₹1200 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 7.300000190734863,
      slugs: {
        restaurant:
          "oakleaf:-oakwood-residence-kapil-hyderabad-nanakramguda-nanakramguda",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Oakwood Residence Kapil Hyderabad, Survey Number 115/1, Nanakramguda, Financial District Gachibowli, Hyderabad 500032",
      locality: "Gachibowli",
      parentId: 252010,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "383466",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 7.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹1200 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "617669",
      name: "Erra Karam",
      uuid: "f355c6ca-34a3-4081-a356-a59db98f1181",
      city: "3",
      area: "Jubilee Hills",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "zgkjcyw8qjgzf58raqr0",
      cuisines: ["South Indian", "North Indian", "Beverages"],
      tags: [],
      costForTwo: 120000,
      costForTwoString: "₹1200 FOR TWO",
      deliveryTime: 46,
      minDeliveryTime: 46,
      maxDeliveryTime: 46,
      slaString: "46 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "erra-karam-jubilee-hills-jubilee-hills",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Door No. 8-2-293/82/A/280/A/FF, Plot No.280/A, Jubilee Hills, Road No.10C, Hyderabad. ,Khairatabad Circle No.17 ,Hyderabad,Telangana-500034",
      locality: "Khairatabad Circle No17",
      parentId: 368163,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "617669",
        deliveryTime: 46,
        minDeliveryTime: 46,
        maxDeliveryTime: 46,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹1200 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "41828",
      name: "Tom and Nori",
      uuid: "6df4cc75-a7c3-40f6-acab-38b3497fd0dd",
      city: "3",
      area: "Jubilee Hills",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "mho1qkajj3n5sqt3a3jk",
      cuisines: ["American", "Italian", "Asian"],
      tags: [],
      costForTwo: 120000,
      costForTwoString: "₹1200 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 3.5,
      slugs: {
        restaurant: "f9-testkitchen-jubilee-hills-jubilee-hills",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Plot no: 863, Road Number 45, Nandagiri Hills, Jubilee Hills, Hyderabad, Telangana 500033",
      locality: "Nandagiri Hills",
      parentId: 313901,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "41828",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 3.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹1200 FOR TWO",
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "622364",
      name: "Labonel Fine Baking",
      uuid: "24e84df8-e7cf-47ec-8608-56d90717055e",
      city: "3",
      area: "Gachibowli",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "ryjw2pgsxbnxdlcwb6hi",
      cuisines: ["Bakery", "Desserts"],
      tags: [],
      costForTwo: 120000,
      costForTwoString: "₹1200 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "labonel-fine-baking-gachibowli-gachibowli",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Plot. No:627, Sy. No:18, Vaishanavi Sree Square, Gachibowli, Serilingampally, Hyderabad, Circle No.12 (Serilingampally-2), Hyderabad - West Zone(Telangana) -500019",
      locality: "Vaishanavi Sree Square",
      parentId: 370499,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "622364",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.7",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
    scrubber: {
      value: "₹1200 FOR TWO",
    },
  },
];

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => (
  <div className="card">
    <img
      src={
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        cloudinaryImageId
      }
    />
    <h2>{name}</h2>
    <h3>{cuisines.join(",")}</h3>
    <h4>{lastMileTravelString} Distance</h4>
  </div>
);
const AppLayOut = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);
const Body = () => (
  <div className="restaurant-list">
    {restaurantList.map((restaurant) => {
      return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
    })}
    {/* <RestaurantCard {...restaurantList[0].data} />
    <RestaurantCard {...restaurantList[1].data} />
    <RestaurantCard {...restaurantList[2].data} />
    <RestaurantCard {...restaurantList[3].data} />
    <RestaurantCard {...restaurantList[4].data} />
    <RestaurantCard {...restaurantList[5].data} />
    <RestaurantCard {...restaurantList[6].data} /> */}
  </div>
);
const Footer = () => <h4>Footer</h4>;
root.render(<AppLayOut />);
