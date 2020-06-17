var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "",
    background_transparent: "yes",
    border_color: "#002c01",
    
    //State defaults
    state_description: "",
    state_color: "#c4dcbc",
    state_hover_color: "#81bd72",
    state_url: "",
    border_size: 1,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "City of Tshwane",
    location_url: "http://www.tshwane.gov.za/",
    location_color: "#ffe504",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "circle",
    location_image_source: "",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "no",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "14px/1.5 Calibri",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "img/core-img",
    fade_time: 0.1,
    link_text: "",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    ZAF1188: {
      name: "Northern Cape",
      color:"#0b72b5"
    },
    ZAF1189: {
      name: "Western Cape",
      color:"#ec5c0f"
    },
    ZAF1201: {
      name: "North West",
      color:"#f8b334"
    },
    ZAF1206: {
      name: "Free-State",
      color: "#e3001b"
    },
    ZAF1208: {
      name: "Gauteng",
      color: "#bf9925"
    },
    ZAF1209: {
      name: "Mpumalanga",
      color:"#ea5d10"
    },
    ZAF1210: {
      name: "Limpopo",
      color:"#e41371"
    },
    ZAF1216: {
      name: "KwaZulu-Natal",
      color:"#80378a"
    },
    ZAF1926: {
      name: "Eastern Cape",
      color:"#009430"
    }
  },
  locations: {
    "0": {
      lat: "-24.7479",
      lng: "28.2498",
      name: "Pretoria",
      type: "image",
      image_url: "img/core-img/tshwane-locator-larger1.svg",
      size:85
    }
  },
  labels: {
    "0": {
      name: "Northern Cape",
      parent_id: "ZAF1188",
      x: 256.5,
      y: 384.3,
    },
    "1": {
      name: "Western Cape",
      parent_id: "ZAF1189",
      x: 161,
      y: 611.4
    },
    "2": {
      name: "North West",
      parent_id: "ZAF1201",
      x: 408.2,
      y: 236.3
    },
    "3": {
      name: "Free State",
      parent_id: "ZAF1206",
      x: 448.8,
      y: 346.6
    },
    "4": {
      name: "Gauteng",
      parent_id: "ZAF1208",
      x: 537.1,
      y: 211.5
    },
    "5": {
      name: "Mpumalanga",
      parent_id: "ZAF1209",
      x: 621.3,
      y: 208.6
    },
    "6": {
      name: "Limpopo",
      parent_id: "ZAF1210",
      x: 614.6,
      y: 67.5
    },
    "7": {
      name: "KwaZulu-Natal",
      parent_id: "ZAF1216",
      x: 665.5,
      y: 322.5
    },
    "8": {
      name: "Eastern Cape",
      parent_id: "ZAF1926",
      x: 473.8,
      y: 520.4
    }
  },
  regions: {}
};