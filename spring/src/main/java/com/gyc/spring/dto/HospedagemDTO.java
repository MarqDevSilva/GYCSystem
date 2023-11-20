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
public class HospedagemDTO {
    
    private Evento evento;
    private Long id;
    private String descricao;
    private String lotacao;
    private String categoria;
    private String valor;
}
