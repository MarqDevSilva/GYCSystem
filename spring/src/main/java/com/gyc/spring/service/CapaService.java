package com.gyc.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.CapaDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.CapaMapper;
import com.gyc.spring.model.Capa;
import com.gyc.spring.repository.CapaRepository;

@Service
public class CapaService extends BaseService<Capa, CapaDTO> {

    @Autowired
    private CapaRepository capaRepository;

    public CapaService(CapaRepository repository, CapaMapper mapper){
        super(repository, mapper);
    }

    public CapaDTO findByEvento(Long id){
        return mapper.toDto(capaRepository.findbyEventoId(id));
    }

    public CapaDTO update(Long id, CapaDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}