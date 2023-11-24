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
public class FormularioDTO {
    
    private Evento evento;
    private Long id;
    private String type;
    private String ask;
    private Boolean required;
    private String[] options;
}
