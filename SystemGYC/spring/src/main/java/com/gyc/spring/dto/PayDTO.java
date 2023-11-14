package com.gyc.spring.dto;

import com.gyc.spring.model.Evento;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PayDTO {
    
    private Evento evento;
    private Long id;
    private Boolean pix;
    private Boolean cartao;
    private String cartaoParcelamento;
    private Boolean boleto;
    private String boletoParcelamento;
}
