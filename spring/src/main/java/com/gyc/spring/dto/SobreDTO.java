package com.gyc.spring.dto;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;

import com.gyc.spring.model.Evento;

import lombok.AllArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SobreDTO {
    
    private Evento evento;
    private Long id;
    private Boolean habilitado;
    private String descricao;
    private String background;
}
