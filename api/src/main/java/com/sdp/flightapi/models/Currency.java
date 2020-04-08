
package com.sdp.flightapi.models;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
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
    "Code",
    "Symbol",
    "ThousandsSeparator",
    "DecimalSeparator",
    "SymbolOnLeft",
    "SpaceBetweenAmountAndSymbol",
    "RoundingCoefficient",
    "DecimalDigits"
})
public class Currency {

    @JsonProperty("Code")
    private String code;
    @JsonProperty("Symbol")
    private String symbol;
    @JsonProperty("ThousandsSeparator")
    private String thousandsSeparator;
    @JsonProperty("DecimalSeparator")
    private String decimalSeparator;
    @JsonProperty("SymbolOnLeft")
    private Boolean symbolOnLeft;
    @JsonProperty("SpaceBetweenAmountAndSymbol")
    private Boolean spaceBetweenAmountAndSymbol;
    @JsonProperty("RoundingCoefficient")
    private Integer roundingCoefficient;
    @JsonProperty("DecimalDigits")
    private Integer decimalDigits;
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
