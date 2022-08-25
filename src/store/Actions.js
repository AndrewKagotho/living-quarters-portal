// BROWSE ACTIONS
const addListingToState = (a,b,c,d,e,f) => {
  return {
    type: 'B_ADD_AVAILABLE_LISTINGS',
    name: a,
    location: b,
    vacancies: c,
    features: d,
    prices: e,
    images: f
  }
}

export const mapBrowseDispatchToProps = {
  addListingToState
}

// USER ACTIONS
const adduserDetails = (x1,x2,x3,x4,x5,x6) => {
  return {
    type: 'U_ADD_USER_INFO',
    firstName: x1,
    lastName: x2,
    email: x3,
    phoneNo: x4,
    nationalID: x5,
    username: x6
  }
}

const addResidenceDetails = (x1,x2,x3,x4,x5) => {
  return {
    type: 'U_ADD_RESIDENCE_INFO',
    agreementType: x1,
    period: x2,
    activity: x3,
    startDate: x4,
    session: x5
  }
}

const updateTenantRentHistory = (x1,x2,x3,x4,x5,x6) => {
  return {
    type: 'U_UPDATE_TRANSACTIONS',
    payee: x1,
    payable: x2,
    method: x3,
    refNo: x4,
    paid: x5,
    date: x6
  }
}

const addQuartersDetails = (x1,x2,x3,x4,x5) => {
  return {
    type: 'U_ADD_QUARTERS_INFO',
    quartersName: x1,
    quartersLocation: x2,
    quartersLandlord: x3,
    quartersPrice: x4,
    quartersImage: x5
  }
}

const addLandlordDetails = (x1,x2,x3,x4,x5) => {
  return {
    type: 'U_ADD_LANDLORD_INFO',
    firstName: x1,
    lastName: x2,
    email: x3,
    phoneNo: x4,
    payDetails: x5
  }
}

const addMessage = (x1,x2,x3,x4) => {
  return {
    type: 'U_ADD_MESSAGES',
    from: x1,
    to: x2,
    time: x3,
    body: x4
  }
}

const resetUserMessages = () => {
  return {
    type: 'U_RESET_MESSAGES'
  }
}

export const mapUserDispatchToProps = {
  adduserDetails,
  addResidenceDetails,
  updateTenantRentHistory,
  addQuartersDetails,
  addLandlordDetails,
  addMessage,
  resetUserMessages
}

// LANDLORD ACTIONS
const addLandlordDetailsMain = (x1,x2,x3,x4,x5,x6,x7,x8) => {
  return {
    type: 'L_ADD_LANDLORD_INFO',
    username: x1,
    firstName: x2,
    lastName: x3,
    email: x4,
    password: x5,
    phoneNo: x6,
    nationalID: x7,
    payDetails: x8
  }
}

const addListingsDetails = (x1,x2,x3,x4,x5,x6,x7) => {
  return {
    type: 'L_ADD_LISTINGS_INFO',
    qid: x1,
    name: x2,
    location: x3,
    vacancies: x4,
    features: x5,
    prices: x6,
    images: x7
  }
}

const addTenants = (x1,x2,x3,x4,x5,x6) => {
  return {
    type: 'L_ADD_TENANTS_DETAILS',
    username: x1,
    firstName: x2,
    lastName: x3,
    email: x4,
    phoneNo: x5,
    nationalID: x6
  }
}

const addResidence = (x1,x2,x3,x4,x5,x6,x7) => {
  return {
    type: 'L_ADD_TENANTS_RESIDENCE',
    residenceID: x1,
    quartersID: x2,
    agreementType: x3,
    period: x4,
    activity: x5,
    session: x6,
    startDate: x7
  }
}

const updateRentHistory = (x1,x2,x3,x4,x5,x6,x7) => {
  return {
    type: 'L_UPDATE_TRANSACTIONS',
    transactionID: x1,
    payer: x2,
    payable: x3,
    method: x4,
    refNo: x5,
    paid: x6,
    date: x7
  }
}

const resetTableData = (dbtable) => {
  return {
    type: 'L_RESET_TABLE_DATA',
    dbtable: dbtable
  }
}

const addLandlordMessages = (x1,x2,x3,x4) => {
  return {
    type: 'L_ADD_MESSAGES',
    from: x1,
    to: x2,
    time: x3,
    body: x4
  }
}

const resetLandlordMessages = () => {
  return {
    type: 'L_RESET_MESSAGES'
  }
}

const addSearchResults = (x1,x2,x3) => {
  return {
    type: 'L_ADD_SEARCH_RESULTS',
    username: x1,
    firstName: x2,
    lastName: x3
  }
}

const resetSearchResults = () => {
  return {
    type: 'L_RESET_SEARCH_RESULTS'
  }
}

export const mapLandlordDispatchToProps = {
  addLandlordDetailsMain,
  addTenants,
  addResidence,
  addListingsDetails,
  updateRentHistory,
  resetTableData,
  addLandlordMessages,
  resetLandlordMessages,
  addSearchResults,
  resetSearchResults
}