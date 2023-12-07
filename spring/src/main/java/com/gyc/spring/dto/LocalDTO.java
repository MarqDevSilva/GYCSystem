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
public class LocalDTO {
    
    private Evento evento;
    private Long id;
    private String cep;
    private String uf;
    private String cidade;
    private String bairro;
    private String endereco;
    private Short numero;
    private Number lng;
    private Number lat;
    private Boolean habilitado;
}
