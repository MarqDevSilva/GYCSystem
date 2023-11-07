package com.gyc.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventoDTO {
    private Long id; 
    private String nomeEvento;
    private Short maxInscricoes;
    private String whatsapp;
    private String dataInicial;  
    private String dataFinal;
}   
