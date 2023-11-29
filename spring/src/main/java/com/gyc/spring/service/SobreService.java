package com.gyc.spring.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gyc.spring.dto.SobreDTO;
import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.SobreMapper;
import com.gyc.spring.model.Sobre;
import com.gyc.spring.repository.SobreRepository;

@Service
public class SobreService extends BaseService<Sobre, SobreDTO> {

    @Autowired
    private SobreRepository sobreRepository;

    public SobreService(SobreRepository repository, SobreMapper mapper){
        super(repository, mapper);
    }

    public Optional<SobreDTO> findByEvento(Long id){
        Optional<Sobre> optional = sobreRepository.findByEventoId(id);
        return optional.map(mapper::toDto);
    }

    public SobreDTO update(Long id, SobreDTO entity) {
        if (repository.existsById(id)) {
            return update(entity);
        } else {
            throw new SystemNotFound("Não encontrado.");
        }
    }
}
