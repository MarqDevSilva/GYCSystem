package com.gyc.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.gyc.spring.model.Evento;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RefeicoesDTO {
    
    private Evento evento;
    private Long id;
    private String descricao;
    private String valor;
    private String data;
}
