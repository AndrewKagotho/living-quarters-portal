export const initialState = {
  user: {
    details: {
      username:"",
      firstName:"",
      lastName:"",
      email:"",
      phoneNo:"",
      nationalID:""
    },
    residence: {
      quartersName:"",
      quartersLocation:"",
      quartersLandlord:"",
      quartersPrice:"",
      quartersImage:"",
      agreementType:"",
      period:"",
      activity:"",
      startDate:"",
      session:""
    },
    transactions: {
      payee: [],
      payable: [],
      method: [],
      refNo: [],
      paid: [],
      date: []
    },
    landlord: {
      firstName:"",
      lastName:"",
      email:"",
      phoneNo:"",
      payDetails:""
    },
    messages: {
      from: [],
      to: [],
      time: [],
      body: []
    }
  },
  landlord: {
    details: {
      username:"",
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      phoneNo:"",
      nationalID:"",
      payDetails:""
    },
    tenants: {
      usernames: [],
      firstNames: [],
      lastNames: [],
      emails: [],
      phoneNos: [],
      nationalIDs: [],
      residenceID: [],
      quartersID: [],
      agreementTypes: [],
      periods: [],
      activeStatus: [],
      startDates: [],
      sessions: []
    },
    listings: {
      qid: [],
      names: [],
      locations: [],
      vacancies: [],
      features: [],
      prices: [],
      images: []
    },
    transactions: {
      transactionsID: [],
      payers: [],
      payable: [],
      methods: [],
      refNos: [],
      paid: [],
      dates: []
    },
    searchResults: {
      username: [],
      firstName: [],
      lastName: []
    },
    messages: {
      from: [],
      to: [],
      time: [],
      body: []
    },
    dbData: {
      selectedDb:""
    }
  },
  browse: {
    name: [],
    location: [],
    vacancies: [],
    features: [],
    prices: [],
    images: []
  }
}