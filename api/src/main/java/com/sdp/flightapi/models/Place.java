
package com.sdp.flightapi.models;

import com.fasterxml.jackson.annotation.*;

import java.util.HashMap;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
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
    private Map<String, Object> additionalProperties = new HashMap<>();
  
    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}
