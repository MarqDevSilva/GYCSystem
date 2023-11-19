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
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Pay extends BaseEntity{

    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "eventoId")
    private Evento evento;

    @Column(length = 300)
    private Boolean pix;
    
    @Column(length = 100)
    private Boolean cartao;

    @Column(length = 100)
    private String cartaoParcelamento;

    @Column(length = 100)
    private Boolean boleto;

    @Column(length = 100)
    private String boletoParcelamento;
}

