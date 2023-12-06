package com.gyc.spring.dto;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.Date;

import com.gyc.spring.model.Evento;

import lombok.AllArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProgramacaoDTO {
    
    private Evento evento;
    private Long id;
    private String data;
    private String inicio;
    private String termino;
    private String atividade;
}