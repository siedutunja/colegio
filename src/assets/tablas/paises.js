const paises = [
  {
    "id": "004",
    "pais": "AFGHANISTAN"
  },
  {
    "id": "248",
    "pais": "ÅLAND ISLANDS"
  },
  {
    "id": "008",
    "pais": "ALBANIA"
  },
  {
    "id": "012",
    "pais": "ALGERIA"
  },
  {
    "id": "016",
    "pais": "AMERICAN SAMOA"
  },
  {
    "id": "020",
    "pais": "ANDORRA"
  },
  {
    "id": "024",
    "pais": "ANGOLA"
  },
  {
    "id": "660",
    "pais": "ANGUILLA"
  },
  {
    "id": "010",
    "pais": "ANTARCTICA"
  },
  {
    "id": "028",
    "pais": "ANTIGUA AND BARBUDA"
  },
  {
    "id": "032",
    "pais": "ARGENTINA"
  },
  {
    "id": "051",
    "pais": "ARMENIA"
  },
  {
    "id": "533",
    "pais": "ARUBA"
  },
  {
    "id": "036",
    "pais": "AUSTRALIA"
  },
  {
    "id": "040",
    "pais": "AUSTRIA"
  },
  {
    "id": "031",
    "pais": "AZERBAIJAN"
  },
  {
    "id": "044",
    "pais": "BAHAMAS"
  },
  {
    "id": "048",
    "pais": "BAHRAIN"
  },
  {
    "id": "050",
    "pais": "BANGLADESH"
  },
  {
    "id": "052",
    "pais": "BARBADOS"
  },
  {
    "id": "112",
    "pais": "BELARUS"
  },
  {
    "id": "056",
    "pais": "BELGIUM"
  },
  {
    "id": "084",
    "pais": "BELIZE"
  },
  {
    "id": "204",
    "pais": "BENIN"
  },
  {
    "id": "060",
    "pais": "BERMUDA"
  },
  {
    "id": "064",
    "pais": "BHUTAN"
  },
  {
    "id": "068",
    "pais": "BOLIVIA (PLURINATIONAL STATE OF)"
  },
  {
    "id": "535",
    "pais": "BONAIRE, SINT EUSTATIUS AND SABA"
  },
  {
    "id": "070",
    "pais": "BOSNIA AND HERZEGOVINA"
  },
  {
    "id": "072",
    "pais": "BOTSWANA"
  },
  {
    "id": "074",
    "pais": "BOUVET ISLAND"
  },
  {
    "id": "076",
    "pais": "BRAZIL"
  },
  {
    "id": "086",
    "pais": "BRITISH INDIAN OCEAN TERRITORY"
  },
  {
    "id": "581",
    "pais": "UNITED STATES MINOR OUTLYING ISLANDS"
  },
  {
    "id": "092",
    "pais": "VIRGIN ISLANDS (BRITISH)"
  },
  {
    "id": "850",
    "pais": "VIRGIN ISLANDS (U.S.)"
  },
  {
    "id": "096",
    "pais": "BRUNEI DARUSSALAM"
  },
  {
    "id": "100",
    "pais": "BULGARIA"
  },
  {
    "id": "854",
    "pais": "BURKINA FASO"
  },
  {
    "id": "108",
    "pais": "BURUNDI"
  },
  {
    "id": "116",
    "pais": "CAMBODIA"
  },
  {
    "id": "120",
    "pais": "CAMEROON"
  },
  {
    "id": "124",
    "pais": "CANADA"
  },
  {
    "id": "132",
    "pais": "CABO VERDE"
  },
  {
    "id": "136",
    "pais": "CAYMAN ISLANDS"
  },
  {
    "id": "140",
    "pais": "CENTRAL AFRICAN REPUBLIC"
  },
  {
    "id": "148",
    "pais": "CHAD"
  },
  {
    "id": "152",
    "pais": "CHILE"
  },
  {
    "id": "156",
    "pais": "CHINA"
  },
  {
    "id": "162",
    "pais": "CHRISTMAS ISLAND"
  },
  {
    "id": "166",
    "pais": "COCOS (KEELING) ISLANDS"
  },
  {
    "id": "170",
    "pais": "COLOMBIA"
  },
  {
    "id": "174",
    "pais": "COMOROS"
  },
  {
    "id": "178",
    "pais": "CONGO"
  },
  {
    "id": "180",
    "pais": "CONGO (DEMOCRATIC REPUBLIC OF THE)"
  },
  {
    "id": "184",
    "pais": "COOK ISLANDS"
  },
  {
    "id": "188",
    "pais": "COSTA RICA"
  },
  {
    "id": "191",
    "pais": "CROATIA"
  },
  {
    "id": "192",
    "pais": "CUBA"
  },
  {
    "id": "531",
    "pais": "CURAÇAO"
  },
  {
    "id": "196",
    "pais": "CYPRUS"
  },
  {
    "id": "203",
    "pais": "CZECH REPUBLIC"
  },
  {
    "id": "208",
    "pais": "DENMARK"
  },
  {
    "id": "262",
    "pais": "DJIBOUTI"
  },
  {
    "id": "212",
    "pais": "DOMINICA"
  },
  {
    "id": "214",
    "pais": "DOMINICAN REPUBLIC"
  },
  {
    "id": "218",
    "pais": "ECUADOR"
  },
  {
    "id": "818",
    "pais": "EGYPT"
  },
  {
    "id": "222",
    "pais": "EL SALVADOR"
  },
  {
    "id": "226",
    "pais": "EQUATORIAL GUINEA"
  },
  {
    "id": "232",
    "pais": "ERITREA"
  },
  {
    "id": "233",
    "pais": "ESTONIA"
  },
  {
    "id": "231",
    "pais": "ETHIOPIA"
  },
  {
    "id": "238",
    "pais": "FALKLAND ISLANDS (MALVINAS)"
  },
  {
    "id": "234",
    "pais": "FAROE ISLANDS"
  },
  {
    "id": "242",
    "pais": "FIJI"
  },
  {
    "id": "246",
    "pais": "FINLAND"
  },
  {
    "id": "250",
    "pais": "FRANCE"
  },
  {
    "id": "254",
    "pais": "FRENCH GUIANA"
  },
  {
    "id": "258",
    "pais": "FRENCH POLYNESIA"
  },
  {
    "id": "260",
    "pais": "FRENCH SOUTHERN TERRITORIES"
  },
  {
    "id": "266",
    "pais": "GABON"
  },
  {
    "id": "270",
    "pais": "GAMBIA"
  },
  {
    "id": "268",
    "pais": "GEORGIA"
  },
  {
    "id": "276",
    "pais": "GERMANY"
  },
  {
    "id": "288",
    "pais": "GHANA"
  },
  {
    "id": "292",
    "pais": "GIBRALTAR"
  },
  {
    "id": "300",
    "pais": "GREECE"
  },
  {
    "id": "304",
    "pais": "GREENLAND"
  },
  {
    "id": "308",
    "pais": "GRENADA"
  },
  {
    "id": "312",
    "pais": "GUADELOUPE"
  },
  {
    "id": "316",
    "pais": "GUAM"
  },
  {
    "id": "320",
    "pais": "GUATEMALA"
  },
  {
    "id": "831",
    "pais": "GUERNSEY"
  },
  {
    "id": "324",
    "pais": "GUINEA"
  },
  {
    "id": "624",
    "pais": "GUINEA-BISSAU"
  },
  {
    "id": "328",
    "pais": "GUYANA"
  },
  {
    "id": "332",
    "pais": "HAITI"
  },
  {
    "id": "334",
    "pais": "HEARD ISLAND AND MCDONALD ISLANDS"
  },
  {
    "id": "336",
    "pais": "HOLY SEE"
  },
  {
    "id": "340",
    "pais": "HONDURAS"
  },
  {
    "id": "344",
    "pais": "HONG KONG"
  },
  {
    "id": "348",
    "pais": "HUNGARY"
  },
  {
    "id": "352",
    "pais": "ICELAND"
  },
  {
    "id": "356",
    "pais": "INDIA"
  },
  {
    "id": "360",
    "pais": "INDONESIA"
  },
  {
    "id": "384",
    "pais": "CÔTE D'IVOIRE"
  },
  {
    "id": "364",
    "pais": "IRAN (ISLAMIC REPUBLIC OF)"
  },
  {
    "id": "368",
    "pais": "IRAQ"
  },
  {
    "id": "372",
    "pais": "IRELAND"
  },
  {
    "id": "833",
    "pais": "ISLE OF MAN"
  },
  {
    "id": "376",
    "pais": "ISRAEL"
  },
  {
    "id": "380",
    "pais": "ITALY"
  },
  {
    "id": "388",
    "pais": "JAMAICA"
  },
  {
    "id": "392",
    "pais": "JAPAN"
  },
  {
    "id": "832",
    "pais": "JERSEY"
  },
  {
    "id": "400",
    "pais": "JORDAN"
  },
  {
    "id": "398",
    "pais": "KAZAKHSTAN"
  },
  {
    "id": "404",
    "pais": "KENYA"
  },
  {
    "id": "296",
    "pais": "KIRIBATI"
  },
  {
    "id": "414",
    "pais": "KUWAIT"
  },
  {
    "id": "417",
    "pais": "KYRGYZSTAN"
  },
  {
    "id": "418",
    "pais": "LAO PEOPLE'S DEMOCRATIC REPUBLIC"
  },
  {
    "id": "428",
    "pais": "LATVIA"
  },
  {
    "id": "422",
    "pais": "LEBANON"
  },
  {
    "id": "426",
    "pais": "LESOTHO"
  },
  {
    "id": "430",
    "pais": "LIBERIA"
  },
  {
    "id": "434",
    "pais": "LIBYA"
  },
  {
    "id": "438",
    "pais": "LIECHTENSTEIN"
  },
  {
    "id": "440",
    "pais": "LITHUANIA"
  },
  {
    "id": "442",
    "pais": "LUXEMBOURG"
  },
  {
    "id": "446",
    "pais": "MACAO"
  },
  {
    "id": "807",
    "pais": "MACEDONIA (THE FORMER YUGOSLAV REPUBLIC OF)"
  },
  {
    "id": "450",
    "pais": "MADAGASCAR"
  },
  {
    "id": "454",
    "pais": "MALAWI"
  },
  {
    "id": "458",
    "pais": "MALAYSIA"
  },
  {
    "id": "462",
    "pais": "MALDIVES"
  },
  {
    "id": "466",
    "pais": "MALI"
  },
  {
    "id": "470",
    "pais": "MALTA"
  },
  {
    "id": "584",
    "pais": "MARSHALL ISLANDS"
  },
  {
    "id": "474",
    "pais": "MARTINIQUE"
  },
  {
    "id": "478",
    "pais": "MAURITANIA"
  },
  {
    "id": "480",
    "pais": "MAURITIUS"
  },
  {
    "id": "175",
    "pais": "MAYOTTE"
  },
  {
    "id": "484",
    "pais": "MEXICO"
  },
  {
    "id": "583",
    "pais": "MICRONESIA (FEDERATED STATES OF)"
  },
  {
    "id": "498",
    "pais": "MOLDOVA (REPUBLIC OF)"
  },
  {
    "id": "492",
    "pais": "MONACO"
  },
  {
    "id": "496",
    "pais": "MONGOLIA"
  },
  {
    "id": "499",
    "pais": "MONTENEGRO"
  },
  {
    "id": "500",
    "pais": "MONTSERRAT"
  },
  {
    "id": "504",
    "pais": "MOROCCO"
  },
  {
    "id": "508",
    "pais": "MOZAMBIQUE"
  },
  {
    "id": "104",
    "pais": "MYANMAR"
  },
  {
    "id": "516",
    "pais": "NAMIBIA"
  },
  {
    "id": "520",
    "pais": "NAURU"
  },
  {
    "id": "524",
    "pais": "NEPAL"
  },
  {
    "id": "528",
    "pais": "NETHERLANDS"
  },
  {
    "id": "540",
    "pais": "NEW CALEDONIA"
  },
  {
    "id": "554",
    "pais": "NEW ZEALAND"
  },
  {
    "id": "558",
    "pais": "NICARAGUA"
  },
  {
    "id": "562",
    "pais": "NIGER"
  },
  {
    "id": "566",
    "pais": "NIGERIA"
  },
  {
    "id": "570",
    "pais": "NIUE"
  },
  {
    "id": "574",
    "pais": "NORFOLK ISLAND"
  },
  {
    "id": "408",
    "pais": "KOREA (DEMOCRATIC PEOPLE'S REPUBLIC OF)"
  },
  {
    "id": "580",
    "pais": "NORTHERN MARIANA ISLANDS"
  },
  {
    "id": "578",
    "pais": "NORWAY"
  },
  {
    "id": "512",
    "pais": "OMAN"
  },
  {
    "id": "586",
    "pais": "PAKISTAN"
  },
  {
    "id": "585",
    "pais": "PALAU"
  },
  {
    "id": "275",
    "pais": "PALESTINE, STATE OF"
  },
  {
    "id": "591",
    "pais": "PANAMA"
  },
  {
    "id": "598",
    "pais": "PAPUA NEW GUINEA"
  },
  {
    "id": "600",
    "pais": "PARAGUAY"
  },
  {
    "id": "604",
    "pais": "PERU"
  },
  {
    "id": "608",
    "pais": "PHILIPPINES"
  },
  {
    "id": "612",
    "pais": "PITCAIRN"
  },
  {
    "id": "616",
    "pais": "POLAND"
  },
  {
    "id": "620",
    "pais": "PORTUGAL"
  },
  {
    "id": "630",
    "pais": "PUERTO RICO"
  },
  {
    "id": "634",
    "pais": "QATAR"
  },
  {
    "id": "000",
    "pais": "REPUBLIC OF KOSOVO"
  },
  {
    "id": "638",
    "pais": "RÉUNION"
  },
  {
    "id": "642",
    "pais": "ROMANIA"
  },
  {
    "id": "643",
    "pais": "RUSSIAN FEDERATION"
  },
  {
    "id": "646",
    "pais": "RWANDA"
  },
  {
    "id": "652",
    "pais": "SAINT BARTHÉLEMY"
  },
  {
    "id": "654",
    "pais": "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA"
  },
  {
    "id": "659",
    "pais": "SAINT KITTS AND NEVIS"
  },
  {
    "id": "662",
    "pais": "SAINT LUCIA"
  },
  {
    "id": "663",
    "pais": "SAINT MARTIN (FRENCH PART)"
  },
  {
    "id": "666",
    "pais": "SAINT PIERRE AND MIQUELON"
  },
  {
    "id": "670",
    "pais": "SAINT VINCENT AND THE GRENADINES"
  },
  {
    "id": "882",
    "pais": "SAMOA"
  },
  {
    "id": "674",
    "pais": "SAN MARINO"
  },
  {
    "id": "678",
    "pais": "SAO TOME AND PRINCIPE"
  },
  {
    "id": "682",
    "pais": "SAUDI ARABIA"
  },
  {
    "id": "686",
    "pais": "SENEGAL"
  },
  {
    "id": "688",
    "pais": "SERBIA"
  },
  {
    "id": "690",
    "pais": "SEYCHELLES"
  },
  {
    "id": "694",
    "pais": "SIERRA LEONE"
  },
  {
    "id": "702",
    "pais": "SINGAPORE"
  },
  {
    "id": "534",
    "pais": "SINT MAARTEN (DUTCH PART)"
  },
  {
    "id": "703",
    "pais": "SLOVAKIA"
  },
  {
    "id": "705",
    "pais": "SLOVENIA"
  },
  {
    "id": "090",
    "pais": "SOLOMON ISLANDS"
  },
  {
    "id": "706",
    "pais": "SOMALIA"
  },
  {
    "id": "710",
    "pais": "SOUTH AFRICA"
  },
  {
    "id": "239",
    "pais": "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS"
  },
  {
    "id": "410",
    "pais": "KOREA (REPUBLIC OF)"
  },
  {
    "id": "728",
    "pais": "SOUTH SUDAN"
  },
  {
    "id": "724",
    "pais": "SPAIN"
  },
  {
    "id": "144",
    "pais": "SRI LANKA"
  },
  {
    "id": "729",
    "pais": "SUDAN"
  },
  {
    "id": "740",
    "pais": "SURINAME"
  },
  {
    "id": "744",
    "pais": "SVALBARD AND JAN MAYEN"
  },
  {
    "id": "748",
    "pais": "SWAZILAND"
  },
  {
    "id": "752",
    "pais": "SWEDEN"
  },
  {
    "id": "756",
    "pais": "SWITZERLAND"
  },
  {
    "id": "760",
    "pais": "SYRIAN ARAB REPUBLIC"
  },
  {
    "id": "158",
    "pais": "TAIWAN"
  },
  {
    "id": "762",
    "pais": "TAJIKISTAN"
  },
  {
    "id": "834",
    "pais": "TANZANIA, UNITED REPUBLIC OF"
  },
  {
    "id": "764",
    "pais": "THAILAND"
  },
  {
    "id": "626",
    "pais": "TIMOR-LESTE"
  },
  {
    "id": "768",
    "pais": "TOGO"
  },
  {
    "id": "772",
    "pais": "TOKELAU"
  },
  {
    "id": "776",
    "pais": "TONGA"
  },
  {
    "id": "780",
    "pais": "TRINIDAD AND TOBAGO"
  },
  {
    "id": "788",
    "pais": "TUNISIA"
  },
  {
    "id": "792",
    "pais": "TURKEY"
  },
  {
    "id": "795",
    "pais": "TURKMENISTAN"
  },
  {
    "id": "796",
    "pais": "TURKS AND CAICOS ISLANDS"
  },
  {
    "id": "798",
    "pais": "TUVALU"
  },
  {
    "id": "800",
    "pais": "UGANDA"
  },
  {
    "id": "804",
    "pais": "UKRAINE"
  },
  {
    "id": "784",
    "pais": "UNITED ARAB EMIRATES"
  },
  {
    "id": "826",
    "pais": "UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND"
  },
  {
    "id": "840",
    "pais": "UNITED STATES OF AMERICA"
  },
  {
    "id": "858",
    "pais": "URUGUAY"
  },
  {
    "id": "860",
    "pais": "UZBEKISTAN"
  },
  {
    "id": "548",
    "pais": "VANUATU"
  },
  {
    "id": "862",
    "pais": "VENEZUELA (BOLIVARIAN REPUBLIC OF)"
  },
  {
    "id": "704",
    "pais": "VIET NAM"
  },
  {
    "id": "876",
    "pais": "WALLIS AND FUTUNA"
  },
  {
    "id": "732",
    "pais": "WESTERN SAHARA"
  },
  {
    "id": "887",
    "pais": "YEMEN"
  },
  {
    "id": "894",
    "pais": "ZAMBIA"
  },
  {
    "id": "716",
    "pais": "ZIMBABWE"
  }
]
export default paises