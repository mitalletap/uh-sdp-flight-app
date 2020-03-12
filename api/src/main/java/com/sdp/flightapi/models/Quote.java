
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
    "Direct",
    "MinPrice",
    "OutboundLeg",
    "QuoteDateTime",
    "QuoteId"
})
public class Quote {

    @JsonProperty("Direct")
    private Boolean direct;
    @JsonProperty("MinPrice")
    private Double minPrice;
    @JsonProperty("OutboundLeg")
    private TripLeg outboundLeg;
    @JsonProperty("InboundLeg")
    private TripLeg inboundLeg;
    @JsonProperty("QuoteDateTime")
    private String quoteDateTime;
    @JsonProperty("QuoteId")
    private Integer quoteId;
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
