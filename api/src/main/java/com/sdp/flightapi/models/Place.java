
package com.sdp.flightapi.models;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "PlaceId",
    "IataCode",
    "Name",
    "Type",
    "SkyscannerCode",
    "CityName",
    "CityId",
    "CountryName"
})
public class Place {

    @JsonProperty("PlaceId")
    private Integer placeId;
    @JsonProperty("IataCode")
    private String iataCode;
    @JsonProperty("Name")
    private String name;
    @JsonProperty("Type")
    private String type;
    @JsonProperty("SkyscannerCode")
    private String skyscannerCode;
    @JsonProperty("CityName")
    private String cityName;
    @JsonProperty("CityId")
    private String cityId;
    @JsonProperty("CountryName")
    private String countryName;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
