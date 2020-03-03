package com.sdp.flightapi.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sdp.flightapi.models.*;

public class RawFlightDataMockData {

    public static RawFlightData generateMockRawFlightData(ObjectMapper mapper)
            throws JsonProcessingException {
        return mapper.readValue("{\n" +
                "  \"Quotes\": [\n" +
                "    {\n" +
                "      \"QuoteId\": 1,\n" +
                "      \"MinPrice\": 300,\n" +
                "      \"Direct\": true,\n" +
                "      \"OutboundLeg\": {\n" +
                "        \"CarrierIds\": [\n" +
                "          100\n" +
                "        ],\n" +
                "        \"OriginId\": 10000,\n" +
                "        \"DestinationId\": 20000,\n" +
                "        \"DepartureDate\": \"2020-05-09T00:00:00\"\n" +
                "      },\n" +
                "      \"InboundLeg\": {\n" +
                "        \"CarrierIds\": [\n" +
                "          100\n" +
                "        ],\n" +
                "        \"OriginId\": 20000,\n" +
                "        \"DestinationId\": 10000,\n" +
                "        \"DepartureDate\": \"2020-05-11T00:00:00\"\n" +
                "      },\n" +
                "      \"QuoteDateTime\": \"2016-11-09T21:20:00\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"QuoteId\": 2,\n" +
                "      \"MinPrice\": 500,\n" +
                "      \"Direct\": false,\n" +
                "      \"OutboundLeg\": {\n" +
                "        \"CarrierIds\": [\n" +
                "          200\n" +
                "        ],\n" +
                "        \"OriginId\": 10000,\n" +
                "        \"DestinationId\": 20000,\n" +
                "        \"DepartureDate\": \"2020-05-10T00:00:00\"\n" +
                "      },\n" +
                "      \"InboundLeg\": {\n" +
                "        \"CarrierIds\": [\n" +
                "          200\n" +
                "        ],\n" +
                "        \"OriginId\": 20000,\n" +
                "        \"DestinationId\": 10000,\n" +
                "        \"DepartureDate\": \"2020-05-12T00:00:00\"\n" +
                "      },\n" +
                "      \"QuoteDateTime\": \"2016-11-09T21:20:00\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"QuoteId\": 3,\n" +
                "      \"MinPrice\": 350,\n" +
                "      \"Direct\": true,\n" +
                "      \"OutboundLeg\": {\n" +
                "        \"CarrierIds\": [\n" +
                "          300\n" +
                "        ],\n" +
                "        \"OriginId\": 10000,\n" +
                "        \"DestinationId\": 20000,\n" +
                "        \"DepartureDate\": \"2020-05-11T00:00:00\"\n" +
                "      },\n" +
                "      \"InboundLeg\": {\n" +
                "        \"CarrierIds\": [\n" +
                "          300\n" +
                "        ],\n" +
                "        \"OriginId\": 20000,\n" +
                "        \"DestinationId\": 10000,\n" +
                "        \"DepartureDate\": \"2020-05-13T00:00:00\"\n" +
                "      },\n" +
                "      \"QuoteDateTime\": \"2016-11-09T21:20:00\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"QuoteId\": 4,\n" +
                "      \"MinPrice\": 450,\n" +
                "      \"Direct\": false,\n" +
                "      \"OutboundLeg\": {\n" +
                "        \"CarrierIds\": [\n" +
                "          500\n" +
                "        ],\n" +
                "        \"OriginId\": 10000,\n" +
                "        \"DestinationId\": 20000,\n" +
                "        \"DepartureDate\": \"2020-05-12T00:00:00\"\n" +
                "      },\n" +
                "      \"InboundLeg\": {\n" +
                "        \"CarrierIds\": [\n" +
                "          500\n" +
                "        ],\n" +
                "        \"OriginId\": 20000,\n" +
                "        \"DestinationId\": 10000,\n" +
                "        \"DepartureDate\": \"2020-05-14T00:00:00\"\n" +
                "      },\n" +
                "      \"QuoteDateTime\": \"2016-11-09T21:20:00\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"Places\": [\n" +
                "    {\n" +
                "      \"PlaceId\": 10000,\n" +
                "      \"IataCode\": \"AAA\",\n" +
                "      \"Name\": \"A City Airport\",\n" +
                "      \"Type\": \"Station\",\n" +
                "      \"SkyscannerCode\": \"AAA\",\n" +
                "      \"CityName\": \"A City\",\n" +
                "      \"CityID\": \"AAAA\",\n" +
                "      \"CountryName\": \"United States\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"PlaceId\": 20000,\n" +
                "      \"IataCode\": \"BBB\",\n" +
                "      \"Name\": \"B City Airport\",\n" +
                "      \"Type\": \"Station\",\n" +
                "      \"SkyscannerCode\": \"BBB\",\n" +
                "      \"CityName\": \"B City\",\n" +
                "      \"CityID\": \"BBBA\",\n" +
                "      \"CountryName\": \"United States\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"Carriers\": [\n" +
                "    {\n" +
                "      \"CarrierId\": 100,\n" +
                "      \"Name\": \"Alpha Airlines\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"CarrierId\": 200,\n" +
                "      \"Name\": \"Beta Airlines\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"CarrierId\": 300,\n" +
                "      \"Name\": \"Gamma Airlines\"\n" +
                "    },\n" +
                "    {\n" +
                "      \"CarrierId\": 500,\n" +
                "      \"Name\": \"Epsilon Airlines\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"Currencies\": [\n" +
                "    {\n" +
                "      \"Code\": \"EUR\",\n" +
                "      \"Symbol\": \"€\",\n" +
                "      \"ThousandsSeparator\": \" \",\n" +
                "      \"DecimalSeparator\": \",\",\n" +
                "      \"SymbolOnLeft\": false,\n" +
                "      \"SpaceBetweenAmountAndSymbol\": true,\n" +
                "      \"RoundingCoefficient\": 0,\n" +
                "      \"DecimalDigits\": 2\n" +
                "    }\n" +
                "  ]\n" +
                "}",
        RawFlightData.class);
    }
}
