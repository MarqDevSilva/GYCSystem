package com.gyc.spring.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.CancelamentoDTO;
import com.gyc.spring.dto.CapaDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.CapaMapper;
import com.gyc.spring.model.Cancelamento;
import com.gyc.spring.model.Capa;
import com.gyc.spring.repository.CapaRepository;

@Service
public class CapaService extends BaseService<Capa, CapaDTO> {

    @Autowired
    private CapaRepository capaRepository;

    public CapaService(CapaRepository repository, CapaMapper mapper){
        super(repository, mapper);
    }

    public Optional<CapaDTO> findByEvento(Long id){
        Optional<Capa> optional = capaRepository.findByEventoId(id);
        return optional.map(mapper::toDto);
    }

    public CapaDTO update(Long id, CapaDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}