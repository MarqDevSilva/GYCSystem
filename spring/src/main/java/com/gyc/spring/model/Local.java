package com.gyc.spring.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Local extends BaseEntity {
    
    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "eventoId")
    private Evento evento;

    @Column(nullable = false)
    private String cep;

    @Column(nullable = false)
    private String uf;

    @Column(nullable = false)
    private String cidade;

    @Column(nullable = false)
    private String bairro;

    @Column(nullable = false)
    private String endereco;

    @Column(nullable = true)
    private Short numero;

    @Column(nullable = true)
    private Number lng;

    @Column(nullable = true)
    private Number lat;

    @Column(nullable = false)
    private Boolean habilitado;

}
